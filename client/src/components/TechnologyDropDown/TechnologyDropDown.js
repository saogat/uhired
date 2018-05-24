import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import API from "../../utils/API";

class TechnologyDropDown extends Component {
    state = {
        technologies: [], 
        options: []
      };
      
    componentDidMount() {
        this.loadTechnologies();
      }
      
      loadTechnologies = () => {
          API.getTechnologies()
            .then( 
              res => {
                  this.setState({technologies: res.data});
                  let temp = this.state.technologies.map(e => {
                      return { key: e.name,
                              text: e.name,
                              value: e._id}
                  });
                  this.setState({options: temp})
                })
            .catch(err => console.log(err));

      };

      setTechnologySelected = (data) => {
        this.setState({
          technologySelected: data
        });
      }
      
      handleTechnologySelection = (event) => {
        event.preventDefault();
        this.loadResources({id: this.state.technologySelected});
      };

      handleDropdown = (event, data) => {
           this.props.setTechnologySelected(data.value);
    	 };

    render() {
      return (
        <Dropdown 
            style={{marginLeft: "0px", marginBottom: "30px", marginTop: "30px"}} 
            placeholder='Technology' 
            selection options={this.state.options}  
            onChange={this.handleDropdown}
           />);
  }
}

  export default TechnologyDropDown
