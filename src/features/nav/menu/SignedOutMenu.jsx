import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

//const SignedOutMenu = ({signIn}) => {  // passing prop: signIn using destruction
const SignedOutMenu = (props) => {
  return (
    <div>
      <Menu.Item position="right">
        <Button onClick={props.signIn} basic inverted content="Login" />
        <Button basic inverted content="Register" style={{ marginLeft: '0.5em' }} />
      </Menu.Item>
    </div>
  )
}

export default SignedOutMenu
