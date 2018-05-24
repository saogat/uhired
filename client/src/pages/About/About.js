import React, { Component } from "react";
import AboutGrid from "../../components/Grid/AboutGrid.js";
import {Image, Grid, Container,Transition, Sticky} from 'semantic-ui-react';
import FooterDiv from "../../components/Footer/Footer.js";
import MainBreadCrumb from "../../components/BreadCrumb/BreadCrumb.js";
import "./about.css";




class AboutPage extends Component {
  render() {
    return <AboutGrid />;
  }
}

export default AboutPage;
