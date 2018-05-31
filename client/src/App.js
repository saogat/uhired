import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import ResourcePage from "./pages/Resources";
import PortfolioPage from "./pages/Portfolio";
import JobPage from "./pages/Jobs";
import AboutPage from "./pages/About";

const isAuthenticated = window.sessionStorage.getItem("user_id");

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={isAuthenticated ? PortfolioPage : HomePage} /> 
        <Route exact path="/About" component={AboutPage} /> 
        <Route exact path="/Jobs" component={JobPage} /> 
        <Route exact path="/Resources" component={ResourcePage} /> 
        <Route exact path="/Portfolio" component={PortfolioPage} />      
      </Switch>
    </div>
  </Router>
);

export default App;