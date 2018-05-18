import axios from "axios";

export default {
  // Post login
  login: function(login) {
      console.log(login);
      var result = axios.post("/api/users/login", login);
      console.log("Token: ");
      console.log(result);
      return result;
  },
};
