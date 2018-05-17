import React from "react";
import { Button } from 'semantic-ui-react'
import "./LoginBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const LoginBtn = () => (
  <Button color="blue">Log In</Button>
)

export default LoginBtn;
