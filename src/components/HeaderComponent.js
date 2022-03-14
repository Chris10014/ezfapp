import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import { NavLink } from "react-router-dom";
import { serverUrl } from "../shared/serverUrl";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    this.props.loginUser({
      username: this.username.value,
      password: this.password.value,
    });
    event.preventDefault();
  }

  handleLogout() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        <Navbar className="navbar navbar-dark bg-dark sticky-top mb-3" expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src={""} height="30" width="41" alt="BigPoints" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    {" "}
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/registration">
                    {" "}
                    Anmeldung
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
           
          </div>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Benutzername</Label>
                <Input type="text" id="username" name="username" innerRef={(input) => (this.username = input)} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Passwort</Label>
                <Input type="password" id="password" name="password" innerRef={(input) => (this.password = input)} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember" innerRef={(input) => (this.remember = input)} />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Header;
