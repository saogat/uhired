import React from 'react'
import { BreadCrumb } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'


const MainBreadCrumb = () => (
  <div style = {{marginLeft: "30px"}} className="ui breadcrumb fixed huge left aligned navlist">
   <Image src='/uhiredlogo2.png' wrapped size='tiny' />
  <a className="active section" href="/">Home</a>
  <div className="divider">|</div>
  <a className="section" href="/Resources">Resources</a>
  <div className="divider">|</div>
  <a className="active section" href="/Jobs">Jobs</a>
  <div className="divider">|</div>
  <a className="section" href="/Portfolio">Portfolio</a>
</div>
);

export default MainBreadCrumb;
