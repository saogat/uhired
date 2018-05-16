import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const BreadCrumbs = () => (
  <div class="ui breadcrumb">
  <a class="section">Home</a>
  <div class="divider">|</div>
  <a class="section">Resources</a>
  <div class="divider">|</div>
  <div class="active section">Jobs</div>
  <div class="divider">|</div>
  <div class="active section">Portfolio</div>
</div>
);

export default BreadCrumbs;
