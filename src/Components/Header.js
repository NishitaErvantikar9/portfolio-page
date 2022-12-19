import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link } from 'react-router-dom';



function Header() {
    return (
        <div>
        <Navbar fixed="top" className="border-bottom p-3 px-5 nav" bg="white" expand="lg">
        <Navbar.Brand className="logo">Harley Jones</Navbar.Brand>

        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ms-auto">
            <Link className="nav-link me-4" to="/">Home</Link>
            <Link className="nav-link me-4" to="/about">About</Link>
            <Link className="nav-link me-4" to="/portfolio">Portfolio</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

        </div>
    )
}

export default Header
