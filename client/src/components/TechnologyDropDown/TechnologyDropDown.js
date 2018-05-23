import React, { Component } from 'react';
import { Dropdown, Button } from 'semantic-ui-react'
import API from "../../utils/API";

class TechnologyDropDown extends Component {
    state = {
        technologies: [], 
        options: [],
        technologySelected: ""
      };
      


    componentDidMount() {
        this.loadTechnologies();
      }
      
      loadTechnologies = () => {
          console.log("I'm in loadTechnologies" )
          API.getTechnologies()
            .then( 
              res => {
                  console.log("Loading technology");
                  console.log(res);
                  this.setState({technologies: res.data});
                  let temp = this.state.technologies.map(e => {
                      return { key: e.name,
                              text: e.name,
                              value: e.name}
                  });
                  this.setState({options: temp})
                })
            .catch(err => console.log(err));
      };

      render() {
    return (
        <Dropdown 
            style={{marginLeft: "0px", marginBottom: "30px", marginTop: "30px"}} 
            placeholder='Technology' 
            selection options={this.state.options}  
            onSelection={this.handleDropdown}
            name='technologySelected'
            // value={this.state.technologySelected}
           />);
  }
}

  export default TechnologyDropDown
