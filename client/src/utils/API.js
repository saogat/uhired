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
<<<<<<< HEAD
  technology: function (technology) {
    console.log(technology);
=======
  saveTechnology: function (technology) {
>>>>>>> master
    var result = axios.post("/api/technologies", technology);
    return result;
  },
  getTechnologies: function () {
    var result = axios.get("/api/technologies");
    return result;
  },
  addResourceToPortfolio: function (query) {
    var result = axios.post("/api/resources/share", query);
    return result;
  },
  getResources: function (technology) {
    var result = axios.get("/api/technologies/resources/" + technology.id);
    return result;
    },
  resource: function (resource) {
    console.log(resource);
    var result = axios.post("/api/resources", resource);
    console.log(result);
    return result;
  },
  scrape: function (query) {
    console.log("in API client scrape");
    return axios.post("/api/scrape", query);
  }
};