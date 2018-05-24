import axios from "axios";

export default {
  // Post login
  login: function (login) {
    var result = axios.post("/api/users/login", login);
    return result;
  },
  join: function (user) {
    var result = axios.post("/api/users", user);
    return result;
  },
  saveTechnology: function (technology) {
    var result = axios.post("/api/technologies", technology);
    return result;
  },
  getTechnologies: function () {
    var result = axios.get("/api/technologies");
    return result;
  },
  addResourceToPortfolio: function (query) {
    var result = axios.post("/api/resources/portfolio", query);
    return result;
  },
  getResources: function (technology) {
    var result = axios.get("/api/technologies/resources/" + technology.id);
    return result;
    },
  getPortfolioResources: function (query) {
      console.log("In getPortfolioResources");
      var result = axios.get("/api/resources/portfolio/" + query.id + "/" + query.userId);
      return result;
      },
  resource: function (resource) {
    console.log(resource);
    var result = axios.post("/api/resources", resource);
    console.log(result);
    return result;
  },
  addAccomplishment: function (accomplishment) {
    var result = axios.post("api/accomplishments", accomplishment);
    console.log(result);
    return result;
  },
  addResourceNote: function (resource) {
    console.log("In api notes", resource);
    var result = axios.post("api/resources/note", resource)
    return result;
  },
  addJobNote: function (job) {
    console.log("In api notes", job);
    var result = axios.post("api/jobs/:id", job)
    return result;
  },
  scrape: function (query) {
    console.log("in API client scrape");
    console.log(query);
    return axios.post("/api/scrape", query);
  }
};