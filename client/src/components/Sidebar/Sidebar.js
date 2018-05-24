// import React, { Component } from 'react'
// import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Checkbox, Grid } from 'semantic-ui-react'

// class MainSidebar extends Component {
//   state = { visible: true }

//   toggleVisibility = () => this.setState({ visible: !this.state.visible })

//   render() {
//     const { visible } = this.state
//     return (
//       <div>
//         <Button style={{marginTop: "20px"}} className="blue large" onClick={this.toggleVisibility}>Search by Skill</Button>
//         <Sidebar.Pushable as={Segment}>
//           <Sidebar as={Menu} animation='push' width='wide' visible={visible} vertical inverted>
//             <Menu.Item name='home'>
//              <Checkbox /> HTML
//             </Menu.Item>
//             <Menu.Item name='gamepad'>
//             <Checkbox /> Javascript
//             </Menu.Item>
//             <Menu.Item name='camera'>
//             <Checkbox />  React
//             </Menu.Item>
//             <Menu.Item name='mongo'>
//             <Checkbox />  Mongo DB
//             </Menu.Item>
//             <Menu.Item name='mysql'>
//             <Checkbox />  SQL
//             </Menu.Item>
//           </Sidebar>
//           <Sidebar.Pusher>
//             <Segment basic>
//              <Grid>
//      <Grid.Row className="ui inverted">
//       <Grid.Column width={6}>
//       <h3>Resources</h3>
//       </Grid.Column>
//       <Grid.Column width={6}>
//       <h3>My Portfolio - Resources</h3>
//       </Grid.Column>
//       </Grid.Row>
//     <Grid.Row>
//       <Grid.Column width={2}>
//         <Checkbox  label="Save" />
//       </Grid.Column>
//       <Grid.Column width={4}>
//        Resource Title- Link
//       </Grid.Column>
//       <Grid.Column width={2}>
//       <Checkbox label="Remove" />
//       </Grid.Column>
//       <Grid.Column width={4}>
//         Resource Title - Link
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
//             </Segment>
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </div>
//     )
//   }
// }
// export default MainSidebar