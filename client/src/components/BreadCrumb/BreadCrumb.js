import React from 'react'
import { BreadCrumb } from 'semantic-ui-react'


const MainBreadCrumb = () => (
  <div style = {{marginLeft: "25px"}} className="ui breadcrumb fixed huge left aligned navlist">
  <a style={{fontFamily: "cursive", color: "skyBlue", fontSize: "35px", fontWeight: "bold", marginRight: "15px"}} className="active section" href="/">uHired</a>
  <div className="divider">|</div>
  <a style = {{color: "white"}} className="section" href="/About">About</a>
  <div className="divider">|</div>
  <a style = {{color: "white"}} className="section" href="/Resources">Resources</a>
  <div className="divider">|</div>
  <a style = {{color: "white"}} className="section" href="/Jobs">Jobs</a>
  <div className="divider">|</div>
  <a style = {{color: "white"}} className="section" href="/Portfolio">Portfolio</a>
</div>
);

export default MainBreadCrumb;
