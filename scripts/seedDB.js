const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/uhired",
  {
    useMongoClient: true
  }
);

const resourceSeed = [
  {
    url: "https://css-tricks.com/",
    owner: "",
    note:
         "A great help for CSS styling.",
    date: new Date(Date.now())
  },
  {
    url: "https://getbootstrap.com/docs/3.3/css/#grid",
    owner: "",
    note:
         "Grids and media queries",
    date: new Date(Date.now())
  },
  {
    url: "https://www.udemy.com/understand-javascript/",
    owner: "",
    note:
         "Udemy course on advanced JavaScript",
    date: new Date(Date.now())
  },
  {
    url: "https://try.github.io/levels/1/challenges/1",
    owner: "",
    note:
         "github tutorial",
    date: new Date(Date.now())
  },
  {
    url: "https://javascript30.com/",
    owner: "",
    note:
         "JS coding challenges",
    date: new Date(Date.now())
  },
  {
    url: "https://medium.com/appsflyer/10-tips-for-javascript-debugging-like-a-pro-with-console-7140027eb5f6/",
    owner: "",
    note:
         "JS debugging tips",
    date: new Date(Date.now())
  },
  {
    url: "https://reactjs.org/",
    owner: "",
    note:
         "REACT documentation",
    date: new Date(Date.now())
  },
  {
    url: "hhttps://learn.shayhowe.com/html-css/positioning-content/",
    owner: "",
    note:
         "HTML and CSS",
    date: new Date(Date.now())
  },
  {
    url: "https://www.npmjs.com/browse/depended",
    owner: "",
    note:
         "npm documentation",
    date: new Date(Date.now())
  },
  {
    url: "https://hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4",
    owner: "",
    note:
         "JES6-Arrow Functions",
    date: new Date(Date.now())
  },
  {
    url: "https://www.themuse.com/advice/the-job-search-trick-that-every-career-changer-needs-to-know-and-use-now",
    owner: "",
    note:
         "career change info",
    date: new Date(Date.now())
  },
  {
    url: "https://atech.blog/viaduct/mysql-indexes-primer",
    owner: "",
    note:
         "MySQL indexing",
    date: new Date(Date.now())
  },
  {
    url: "hhttp://www.sql-join.com/",
    owner: "",
    note:
         "SQL joins",
    date: new Date(Date.now())
  },
  {
    url: "https://expressjs.com/en/guide/routing.html#route-parameters",
    owner: "",
    note:
         "Expressjs routing",
    date: new Date(Date.now())
  },
  {
    url: "https://hackernoon.com/getting-hired-in-2018-the-keys-to-building-an-attractive-online-portfolio-a1cf2ca834eb",
    owner: "",
    note:
         "building attractive portfolio online",
    date: new Date(Date.now())
  },
  {
      url: "https://hackernoon.com/getting-hired-in-2018-the-keys-to-building-an-attractive-online-portfolio-a1cf2ca834eb",
      owner: "",
      note:
           "mongodb cheat sheet",
      date: new Date(Date.now())
    },
  {
    url: "https://medium.freecodecamp.org/how-to-read-your-way-to-becoming-a-better-developer-b6432fa5bc0c",
    owner: "",
    note:
         "reading documentation",
    date: new Date(Date.now())
  }
];

db.Resource
  .remove({})
  .then(() => db.Resource.collection.insertMany(resourceSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
