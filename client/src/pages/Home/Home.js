import React, {Component} from 'react'
import { Container } from 'semantic-ui-react'
import MainBreadCrumb from "../../components/BreadCrumb/BreadCrumb.js";
import MainImage from "../../components/Image/Image.js";
import "../../components/Grid/Container.css";
import ModalLogin from "../../components/Modal/LoginModal.js";
import ModalJoin from "../../components/Modal/JoinModal.js";
import List from "../../components/List/List.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Resources from "../Resources/Resources.js";


class HomePage extends Component {
  state = {portfolio: {}};

  handleLogin = () => 
      {
      console.log("in handle login");
      this.setState({portfolio: {tech: 'HTML'}});
      console.log(this.state.portfolio);
      };
  handleJoin = () => this.setState({portfolio: {tech: 'HTML'}});

  render() {
    return (
      <div>
      <Container className= "ui fluid inverted vertical masthead padded left aligned segment massive">
          <MainBreadCrumb />
      </Container>
           <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
          <h1>Welcome to UHired</h1>
          <h2>A site for entry-level developers to search for jobs and share resources</h2>
              {/* <ModalJoin /> */}
              <ModalLogin openPortfolio={this.handleLogin}/>
              <ModalJoin openPortfolio={this.handleJoin}/>
          <Container className= "ui fluid inverted vertical masthead center aligned segment massive">
          {this.state.portfolio ? (
            <div>
              <Resources />
              </div>
              // <List>
              //   {this.state.portfolio.map(each => {
              //     return (
              //       <ListItem key={each._id}>
              //         <a href={"/portfolio/" + book._id}>
              //           <strong>
              //             {each.url}
              //           </strong>
              //         </a>
              //         <DeleteBtn onClick={() => this.deleteBook(book._id)} />
              //       </ListItem>
              //     );
              //   })}
              // </List>
            ) : (
              <div />
              // <Resources />
              // <h3>No Results to Display</h3>
            )}
            {/* <MainImage /> */}
          </Container>
        </Container>
      </div>
    )};
  }

  export default HomePage