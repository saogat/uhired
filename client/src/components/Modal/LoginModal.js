import React, { Component } from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';
import LoginForm from "../../components/Form/LoginForm.js";

class ModalLogin extends Component {
   
    state = { modalOpen: false }
  
    handleOpen = () => {
        this.setState({ modalOpen: true }); 
    };
    handleClose = () => {
        this.setState({ modalOpen: false });
        this.props.openPortfolio();
    }
  
    render() {
      return (
    //     <Modal 
    //         className="mini" 
    //         open={this.state.modalOpen}
    //         onClose={this.handleClose}
    //         basic size='small'
    //         trigger={<Button className = "huge inverted blue">Login</Button>}>
    //     <Modal.Header>
    //       <Image wrapped size='tiny' src='https://st2.depositphotos.com/3265223/11274/v/950/depositphotos_112741124-stock-illustration-handshake-line-icon-deal-partnership.jpg' />
    //           Log In</Modal.Header>
    //       <Modal.Content >
    //       <LoginForm close={this.handleClose}/>
    //       </Modal.Content>
    //     </Modal>)
    //   }
    // }

        <Modal
          className="mini" 
          trigger={<Button onClick={this.handleOpen} style={{backgroundColor: "skyBlue", color:"white", textShadow: "2px 2px black", marginRight: "20px"}} className = "massive">Login</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          size='small'
        >
         <Modal.Header>
          <Image wrapped size='tiny' src='https://st2.depositphotos.com/3265223/11274/v/950/depositphotos_112741124-stock-illustration-handshake-line-icon-deal-partnership.jpg' />
           Log In
           </Modal.Header>
          {/* <Header icon='browser' content='Cookies policy' /> */}
          <Modal.Content>
          <LoginForm close={this.handleClose}/>
          </Modal.Content>
        </Modal>
      )
    }
  }

export default ModalLogin


