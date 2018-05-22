import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Technology extends Component {
  state = {
    technologies: [],
    name: "",
    description: ""
  };

  componentDidMount() {
    this.loadTechnology();
  }

  loadTechnology = () => {
    API.getTechnology()
      .then(res =>
        this.setState({ technologies: res.data, name: "", description: ""})
      )
      .catch(err => console.log(err));
  };

  deleteTechnology = id => {
    API.deleteTechnology(id)
      .then(res => this.loadTechnology())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name ) {
      API.saveTechnology({
        title: this.state.name,
        author: this.state.description,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Technology</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit Technology
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Technology List</h1>
            </Jumbotron>
            {this.state.technology.length ? (
              <List>
                {this.state.technology.map(technology=> (
                  <ListItem key={technology._id}>
                    <Link to={"/technology/" + technology._id}>
                      <strong>
                        {technology.name} by {technology.description}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteTechnology(technology._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Technology;
