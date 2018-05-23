const db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");

module.exports = {
  scrape: function (req, res) {

  console.log("In scrapeController");

      axios.get("https://www.indeed.com/jobs?q=junior+web+developer&l=Atlanta%2C+GA").then(function (response) {

        var $ = cheerio.load(response.data);

        $(".result").each(function (i, element) {

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
            .then(function (dbJob) {
              // View the added result in the console
              console.log(dbJob);
            })
            .catch(function (err) {
              // If an error occurred, send it to the client
              return res.json(err);
            });
        });
        // If we were able to successfully scrape and save an Job, send a message to the client
        res.send("Scrape Complete");
      });
  }
}

