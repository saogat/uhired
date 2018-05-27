import axios from "axios";

export default {
  //===================================================
  // Login and Signon Functions

  //POST
  login: function(login) {
    return axios.post("/api/users/login", login);
  },

  //POST
  join: function(user) {
    return axios.post("/api/users", user);
  },

  //===================================================
  // Technology Functions

  // POST
  saveTechnology: function(technology) {
    return axios.post("/api/technologies", technology);
  },

  //GET
  getTechnologies: function() {
    return axios.get("/api/technologies");
  },

  //GET
  getResources: function(query) {
    return axios.get("/api/technologies/resources/" + query.id + "/" + query.userId);
  },

  //===================================================
  // Resource Functions

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
    var result = axios.get("/api/resources/portfolio/" + query.id + "/" + query.userId);
    return result;
  },

  //POST
  addResourceToPortfolio: function(query) {
    return axios.post("/api/resources/portfolio", query);
  },

  //===================================================
  // Accomplishment Functions

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
  // Job Functions

  //GET
  getJobs: function(technology) {
    return axios.get("/api/technologies/jobs/" + technology.id);
  },

  //GET
  getPortfolioJobs: function(query) {
    console.log("In getPortfolioJobs");
    console.log("tech id " + query.id);
    console.log("UserId: " + query.userId);
    var result = axios.get("/api/jobs/portfolio/" + query.id + "/" + query.userId);
    return result;
  },

  //POST
  addJobToPortfolio: function(query) {
    return axios.post("/api/jobs/portfolio", query);
  }
};
