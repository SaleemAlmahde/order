import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';

const WebsiteLayout = ({children}) => {
    return (
      <>
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button><i className="fa fa-bars" aria-hidden="true"></i></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
      {children}
    </Container>
    </>
    );
}

export default WebsiteLayout;
