import React, { Component } from "react";
import AboutGrid from "../../components/Grid/AboutGrid.js";
import "./about.css";
import FooterDiv from "../../components/Footer/Footer.js";




class AboutPage extends Component {
  render() {
    return (
    <div>
    <AboutGrid />
    <div>
    <FooterDiv /></div>
    </div>
    )}
}

export default AboutPage;
