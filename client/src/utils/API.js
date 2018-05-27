import axios from "axios";

export default {
  //===================================================
  // Login and Signon Functions

  //POST
  login: function(login) {
    var result = axios.post("/api/users/login", login);
    return result;
  },

  //POST
  join: function(user) {
    var result = axios.post("/api/users", user);
    return result;
  },

  //===================================================
  // Technology Handler Functions

  // POST
  saveTechnology: function(technology) {
    var result = axios.post("/api/technologies", technology);
    return result;
  },

  //GET
  getTechnologies: function() {
    var result = axios.get("/api/technologies");
    return result;
  },

  //GET
  getResources: function(query) {
    var result = axios.get(
        "/api/technologies/resources/" + query.id + "/" + query.userId
      );
    return result;
  },

  //===================================================
  // Resource Handler Functions

  //POST
  saveResource: function(resource) {
  console.log(resource);
  var result = axios.post("/api/resources", resource);
  console.log(result);
  return result;
  },

  // Portfolio

  //GET
  getPortfolioResources: function(query) {
    console.log("In getPortfolioResources");
    var result = axios.get(
      "/api/resources/portfolio/" + query.id + "/" + query.userId
    );
    return result;
  },

  //POST
  addResourceToPortfolio: function(query) {
    var result = axios.post("/api/resources/portfolio", query);
    return result;
  },


  //===================================================
  // Accomplishment Handler Functions

  //POST
  addAccomplishment: function(accomplishment) {
    var result = axios.post("api/accomplishments", accomplishment);
    console.log(result);
    return result;
  },

  //===================================================
  // Scrape Functions

  //POST
  scrape: function(query) {
    return axios.post("/api/scrape", query);
  },


  //===================================================
  // Job Handler Functions

  //GET
  getJobs: function(technology) {
    var result = axios.get("/api/technologies/jobs/" + technology.id);
    return result;
  }

};
