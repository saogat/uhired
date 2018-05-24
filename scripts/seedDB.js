const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/uhired"
);

const resources = [
   ['HTML', 
  {
    url: "hhttps://learn.shayhowe.com/html-css/positioning-content/",
    description:
         "HTML and CSS",
    date: new Date(Date.now())
  }],
['CSS',
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
    url: "hhttps://learn.shayhowe.com/html-css/positioning-content/",
    description:
         "HTML and CSS",
    date: new Date(Date.now())
  }],
  ['JavaScript',
  {
    url: "https://www.udemy.com/understand-javascript/",
    description:
         "Udemy course on advanced JavaScript",
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
    url: "https://hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4",
    description:
         "JES6-Arrow Functions",
    date: new Date(Date.now())
  }],
  ['Git',
  {
    url: "https://try.github.io/levels/1/challenges/1",
    description:
         "github tutorial",
    date: new Date(Date.now())
  }],
  ['React.JS',
  {
    url: "https://reactjs.org/",
    description:
         "REACT documentation",
    date: new Date(Date.now())
  }],
  ['Node.JS', 
  {
    url: "https://www.npmjs.com/browse/depended",
    description:
         "npm documentation",
    date: new Date(Date.now())
  }],
   ['Career',
  {
    url: "https://www.themuse.com/advice/the-job-search-trick-that-every-career-changer-needs-to-know-and-use-now",
    description:
         "career change info",
    date: new Date(Date.now())
  },
  {
    url: "https://hackernoon.com/getting-hired-in-2018-the-keys-to-building-an-attractive-online-portfolio-a1cf2ca834eb",
    description:
         "building attractive portfolio online",
    date: new Date(Date.now())
  }],
  ['MySql',
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
  }],
  ['Express',
  {
    url: "https://expressjs.com/en/guide/routing.html#route-parameters",
    description:
         "Expressjs routing",
    date: new Date(Date.now())
  }],
  ['Developer',
  {
    url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    description:
         "C# documentation",
    date: new Date(Date.now())
  }]];

  // console.log(resources);

  db.Resource.remove({});
  db.Technology.remove({});

resources.forEach(each => {
  const [tech, ...resourcesArray] = each;
  db.Technology.create({name: tech})
  .then(dbTechnology => {
      resourcesArray.forEach(resource => {
        db.Resource.create(resource)
        .then(dbResource => {
            db.Technology.findByIdAndUpdate(dbTechnology._id,{$push: {resources: dbResource._id }})
            .then(dbTech => {
            })
            .catch(err => {
              console.error(err);
              process.exit(1);
            })
        })
        .catch(err => {
          console.error(err);
          process.exit(1);
        })
  .catch(err => {
      console.error(err);
      process.exit(1);
  });
})
})})
