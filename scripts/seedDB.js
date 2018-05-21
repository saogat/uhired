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
    description:
         "A great help for CSS styling.",
    date: new Date(Date.now())
  },
  {
    url: "https://getbootstrap.com/docs/3.3/css/#grid",
    description:
         "Grids and media queries",
    date: new Date(Date.now())
  },
  {
    url: "https://www.udemy.com/understand-javascript/",
    description:
         "Udemy course on advanced JavaScript",
    date: new Date(Date.now())
  },
  {
    url: "https://try.github.io/levels/1/challenges/1",
    description:
         "github tutorial",
    date: new Date(Date.now())
  },
  {
    url: "https://javascript30.com/",
    description:
         "JS coding challenges",
    date: new Date(Date.now())
  },
  {
    url: "https://medium.com/appsflyer/10-tips-for-javascript-debugging-like-a-pro-with-console-7140027eb5f6/",
    description:
         "JS debugging tips",
    date: new Date(Date.now())
  },
  {
    url: "https://reactjs.org/",
    description:
         "REACT documentation",
    date: new Date(Date.now())
  },
  {
    url: "hhttps://learn.shayhowe.com/html-css/positioning-content/",
    description:
         "HTML and CSS",
    date: new Date(Date.now())
  },
  {
    url: "https://www.npmjs.com/browse/depended",
    description:
         "npm documentation",
    date: new Date(Date.now())
  },
  {
    url: "https://hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4",
    description:
         "JES6-Arrow Functions",
    date: new Date(Date.now())
  },
  {
    url: "https://www.themuse.com/advice/the-job-search-trick-that-every-career-changer-needs-to-know-and-use-now",
    description:
         "career change info",
    date: new Date(Date.now())
  },
  {
    url: "https://atech.blog/viaduct/mysql-indexes-primer",
    description:
         "MySQL indexing",
    date: new Date(Date.now())
  },
  {
    url: "hhttp://www.sql-join.com/",
    description:
         "SQL joins",
    date: new Date(Date.now())
  },
  {
    url: "https://expressjs.com/en/guide/routing.html#route-parameters",
    description:
         "Expressjs routing",
    date: new Date(Date.now())
  },
  {
    url: "https://hackernoon.com/getting-hired-in-2018-the-keys-to-building-an-attractive-online-portfolio-a1cf2ca834eb",
    description:
         "building attractive portfolio online",
    date: new Date(Date.now())
  },
  {
      url: "https://hackernoon.com/getting-hired-in-2018-the-keys-to-building-an-attractive-online-portfolio-a1cf2ca834eb",
      description:
           "mongodb cheat sheet",
      date: new Date(Date.now())
    },
  {
    url: "https://medium.freecodecamp.org/how-to-read-your-way-to-becoming-a-better-developer-b6432fa5bc0c",
    description:
         "reading documentation",
    date: new Date(Date.now())
  }
];

db.Resource
  .remove({})
  .then(() => db.Resource.collection.insertMany(resourceSeed))
  .then(data => {
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
