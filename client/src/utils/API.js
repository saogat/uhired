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
    var result = axios.post("/api/resources", resource);
    return result;
  },

  // Portfolio
  //GET
  getPortfolioResources: function(query) {
    var result = axios.get("/api/resources/portfolio/" + query.id + "/" + query.userId);
    return result;
  },

  //POST
  addResourceToPortfolio: function(query) {
    return axios.post("/api/resources/portfolio", query);
  },

  // Notes
  //POST
  addResourceNote: function(query) {
    return axios.post("/api/resources/note", query);
  },
  //===================================================
  // Accomplishment Functions

  //POST
  addAccomplishment: function(accomplishment) {
    var result = axios.post("api/accomplishments", accomplishment);
    return result;
  },

  //GET
  getPortfolioAccomplishments: function(query){
    var result = axios.get("/api/accomplishments/portfolio/" + query.id + "/" + query.userId);
    return result;
  },

  //===================================================
  // Job Scrape Functions

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

  //Portfolio
  //GET
  getPortfolioJobs: function(query) {
    var result = axios.get("/api/jobs/portfolio/" + query.id + "/" + query.userId);
    return result;
  },

  //POST
  addJobToPortfolio: function(query) {
    return axios.post("/api/jobs/portfolio", query);
  },

  // Notes
  //POST
  addJobNote: function(query) {
    return axios.post("/api/jobs/note", query);
  }

};
