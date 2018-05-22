import axios from "axios";

export default {
  // Post login
  login: function(login) {
      console.log("Client api-login");
      console.log(login);
      var result = axios.post("/api/users/login", login);
      console.log("Token: ");
      console.log(result);
      return result;
  },
  join: function(user) {
    console.log("Client api-user");
    console.log(user);
    var result = axios.post("/api/users", user);
    console.log(result);
    return result;
},
  technology: function(technology) {
    console.log(technology);
    var result = axios.post("/api/technology", technology);
    console.log(result);
    return result;
},
addResourceToPortfolio: function(resourceId){
  console.log(resource);
  console.log(technology);
    var result = axios.post("/api/resources/share", resourceId);
    console.log(result);
    return result;
}
};
