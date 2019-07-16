import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Container, Button } from 'semantic-ui-react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import SignedOutMenu from '../menu/SignedOutMenu'
import SignedInMenu from '../menu/SignedInMenu'
import { openModal } from './../../modals/modalActions';
import { logout } from '../../auth/authActions'

const mapActionsToProps = {
  openModal,
  logout
}

const mapStateToProps = (state) => ({
  auth: state.authRdcr
})

class NavBar extends Component {
  // state = { authenticated: false }
  handleSignIn = () => {
    // this.setState({ authenticated: true })
    this.props.openModal('LoginModal');
  }
  handleSignOut = () => {
    //this.setState({authenticated: false})
    this.props.logout();
    this.props.history.push('/');
  }
  handleRegister = (params) => {
    this.props.openModal('RegisterModal');
  }
  render() {

    const { auth } = this.props;
    const authenticated = auth.authenticated;
    return (
      <Menu inverted fixed="top">
        <Container>
          revent7redux
          <Menu.Item as={Link} to='/' header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>

          <Menu.Item as={NavLink} to='/events' name="Events" />
          {authenticated && <Menu.Item as={NavLink} to='/people' name="People" />}

          {authenticated &&
            <Menu.Item>
              <Button as={Link} to='/createEvent' floated="right"
                positive inverted content="Create Event" />
            </Menu.Item>}
          {authenticated ?
            (<SignedInMenu currentUser={auth.currentUser} signOut={this.handleSignOut} />) : (
              <SignedOutMenu register={this.handleRegister} signIn={this.handleSignIn} />)}
        </Container>
      </Menu>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(NavBar)) 
