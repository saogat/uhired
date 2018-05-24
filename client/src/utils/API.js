import axios from "axios";

export default {
  //===================================================
  // Post Login Functions

  login: function(login) {
    var result = axios.post("/api/users/login", login);
    return result;
  },
  join: function(user) {
    var result = axios.post("/api/users", user);
    return result;
  },

  //===================================================
  // Technology Handler Functions

  saveTechnology: function(technology) {
    var result = axios.post("/api/technologies", technology);
    return result;
  },
  getTechnologies: function() {
    var result = axios.get("/api/technologies");
    return result;
  },

  //===================================================
  // Resource Handler Functions

  addResourceToPortfolio: function(query) {
    var result = axios.post("/api/resources/portfolio", query);
    return result;
  },
  getResources: function(technology) {
    var result = axios.get("/api/technologies/resources/" + technology.id);
    return result;
  },
  getPortfolioResources: function(query) {
    console.log("In getPortfolioResources");
    var result = axios.get("/api/resources/portfolio/" + query);
    return result;
  },
  resource: function(resource) {
    console.log(resource);
    var result = axios.post("/api/resources", resource);
    console.log(result);
    return result;
  },

  //===================================================
  // Scrape Function

  scrape: function(query) {
    console.log("in API client scrape");
    console.log(query);
    return axios.post("/api/scrape", query);
  },

  //===================================================
  // Job Handler Functions
  
  getJobs: function(technology) {
    var result = axios.get("/api/technologies/jobs/" + technology.id);
    return result;
  },

};
