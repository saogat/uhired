import React from 'react'
import { BreadCrumb } from 'semantic-ui-react'

const MainBreadCrumb = () => (
  <div className="ui breadcrumb huge left aligned">
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
