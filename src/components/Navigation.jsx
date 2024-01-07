import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from "react-router-bootstrap";
import download from "../assets/download.png";
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import {useLogoutUserMutation} from "../services/appApi"

const Navigation = () => {
  const user = useSelector(state => state.user);
  const [logoutUser] = useLogoutUserMutation();
  async function handleLogout(e){
    e.preventDefault();
    await logoutUser(user);
    // redirect to home page
    window.location.replace("/");
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
            <Navbar.Brand><img src={download} style={{width: 50, height: 50}} alt='image'/></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user && 
            <LinkContainer to="/login">
                <Nav.Link >Login</Nav.Link>
            </LinkContainer>
            }
            <LinkContainer to="/chat">
                <Nav.Link >Chat</Nav.Link>
            </LinkContainer>
            {user && 
            <NavDropdown title={
              <>
              <img src={user.picture} style={{width: 30, height: 30, marginRight: 10, objectFit: 'cover', borderRadius:"50%"}} alt="user-image"/>
              {user.name}
              </>
            } id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              
              <NavDropdown.Item >
                <Button variant='danger' onClick={handleLogout}>
                  Logout
                </Button>
              </NavDropdown.Item>
            </NavDropdown>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
  )
}

export default Navigation