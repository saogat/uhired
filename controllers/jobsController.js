var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");// Routes


// A GET route for scraping the echoJS website
app.get("/scrape", function(req, res) {
  // First, we grab the body of the html with request
  axios.get("https://www.indeed.com/jobs?q=junior+web+developer&l=Atlanta%2C+GA").then(function(response) {

    var $ = cheerio.load(response.data);

    $(".result").each(function(i, element) {

      var result = {};

      result.title = $(this)
      .children("h2")
      .text()
      .trim();

      result.company = $(this)
      .children("span.company")
      .text()
      .trim();

      result.location = $(this)
      .children("span.location")
      .text()
      .trim();

      result.description = $(this)
      .children("table")
      .last(".summary")
      .text()
      .trim()
      .split("...")[0];

      result.link = "https://www.indeed.com" + $(this)
      .children("h2")
      .children("a")
      .attr("href");


      // Create a new Job using the `result` object built from scraping
      db.Job.create(result)
        .then(function(dbJob) {
          // View the added result in the console
          console.log(dbJob);
        })
        .catch(function(err) {
          // If an error occurred, send it to the client
          return res.json(err);
        });
    });

    // If we were able to successfully scrape and save an Job, send a message to the client
    res.send("Scrape Complete");
  });
});

// Route for getting all Jobs from the db
app.get("/jobs", function(req, res) {
  // Grab every document in the Jobs collection
  db.Job.find({})
    .then(function(dbJob) {
      // If we were able to successfully find Jobs, send them back to the client
      res.json(dbJob);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Route for grabbing a specific Job by id, populate it with it's note
app.get("/jobs/:id", function(req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  db.Job.findOne({ _id: req.params.id })
    // ..and populate all of the notes associated with it
    .populate("note")
    .then(function(dbJob) {
      // If we were able to successfully find an Job with the given id, send it back to the client
      res.json(dbJob);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Route for saving/updating an Job's associated Note
app.post("/jobs/:id", function(req, res) {
  // Create a new note and pass the req.body to the entry
  db.Note.create(req.body)
    .then(function(dbNote) {
      // If a Note was created successfully, find one Job with an `_id` equal to `req.params.id`. Update the Job to be associated with the new Note
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Job.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
    })
    .then(function(dbJob) {
      // If we were able to successfully update an Job, send it back to the client
      res.json(dbJob);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});