import React from 'react'
import { BreadCrumb } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'


const MainBreadCrumb = () => (
  <div style = {{marginLeft: "25px"}} className="ui breadcrumb fixed huge left aligned navlist">
   <Image href="/" src='https://assets.bettyblocks.com/symbid_production/ed493a7981174a428bb45ba91bf614bb/1266/handshake_copy.png' wrapped size='mini' />
  <a style = {{marginLeft: "15px"}} className="active section" href="/">Home</a>
  <div className="divider">|</div>
  <a className="section" href="/Resources">Resources</a>
  <div className="divider">|</div>
  <a className="active section" href="/Jobs">Jobs</a>
  <div className="divider">|</div>
  <a className="section" href="/Portfolio">Portfolio</a>
</div>
);

export default MainBreadCrumb;
