import axios from "axios";

export default {
  // Post login
  login: function (login) {
    console.log("Client api-login");
    console.log(login);
    var result = axios.post("/api/users/login", login);
    console.log("Token: ");
    console.log(result);
    return result;
  },
  join: function (user) {
    console.log("Client api-user");
    console.log(user);
    var result = axios.post("/api/users", user);
    console.log(result);
    return result;
  },
  technology: function (technology) {
    console.log(technology);
    var result = axios.post("/api/technologies", technology);
    console.log(result);
    return result;
  },
  getTechnologies: function () {
    console.log("In Api.js getTechnologies");
    var result = axios.get("/api/technologies");
    console.log(result);
    return result;
  },
  addResourceToPortfolio: function (resourceId) {
    var result = axios.post("/api/resources/share", {resourceId});
    console.log(result);
    return result;
  },
  getResources: function (technology) {
    console.log("API.js getResources");
    console.log(technology.name);
    var result = axios.get("/api/technologies/resources/" + technology.name);
    console.log("API.js getResources result");
    console.log(result);
    return result;
    },
  resource: function (resource) {
    console.log(resource);
    var result = axios.post("/api/resources", resource);
    console.log(result);
    return result;
  },
  scrape: function () {
    console.log("in API client scrape");

    var result = axios.get("/api/scrape");

    console.log("API" + result);

    return result;
  }
};