import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
// import Resource from "./pages/Resource";
// import Job from "./pages/Job";
// import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />  </Switch>
    
    
    </div>
  </Router>
);

export default App;