import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const MainBreadCrumb = () => (
  <div class="ui breadcrumb huge left aligned">
  <a class="active section" href="/">Home</a>
  <div class="divider">|</div>
  <a class="section" href="/Resources">Resources</a>
  <div class="divider">|</div>
  <a class="active section" href="/Jobs">Jobs</a>
  <div class="divider">|</div>
  <a class="section" href="/Portfolio">Portfolio</a>
</div>
);

export default MainBreadCrumb;
