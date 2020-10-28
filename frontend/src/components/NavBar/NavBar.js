import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

const NavigationBar = (props) => {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">K-State Rentals</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" >Home</Nav.Link>
          <NavDropdown title="Tenants" id="basic-nav-dropdown">          
            <Nav.Link href="/create/tenant">Become a Tenant</Nav.Link>
            <Nav.Link href="/update/tenant">Update Tenant info</Nav.Link>
            <Nav.Link href="/">Pay your bill</Nav.Link>
          </NavDropdown>
          
          <NavDropdown title="Property Owners" id="basic-nav-dropdown">          
            <Nav.Link href="/create/propetyowner">Become a property Owner</Nav.Link>
            <Nav.Link href="/update/propetyowner">Update Property Owner info</Nav.Link>
          </NavDropdown>

          <NavDropdown title="Admin" id="basic-nav-dropdown">          
            <Nav.Link href="/report/Queries">Report Queries</Nav.Link>
            <Nav.Link href="/create/Contract">Create Contract</Nav.Link>
            <Nav.Link href="/create/ContractAgreement">Create Contract Agreements</Nav.Link>
            <Nav.Link href="/credit/score">Add Credit Score</Nav.Link>
          </NavDropdown>
          <Nav.Link href="/">Sign In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
