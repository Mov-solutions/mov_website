import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar,NavDropdown } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from '../Component/Home';
import About from '../Component/About';
import Service from '../Component/Service';
import Portfolio from '../Component/Portfolio';
import Contact from '../Component/Contact';
import Blog from '../Component/Blog';
import Element from '../Component/Element';
import Blogdetails from '../Component/Blogdetails';
export class Header extends Component {
  render() {
    return (
    

      <div>
        <header>
        <Navbar collapseOnSelect fixed="top" expand="lg" className='nav'>
        <Container fluid>
          <Navbar.Brand><NavLink to="/"><img src="assets/img/logo/logo.png" alt=""/></NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
             <Nav.Link> <NavLink  exact activeStyle={{color:'yellow'}} to="/" className='navItem'>HOME</NavLink></Nav.Link>
             <Nav.Link> <NavLink  exact activeStyle={{color:'yellow'}}to="about" className='navItem'>ABOUT</NavLink></Nav.Link>
             <Nav.Link><NavLink exact activeStyle={{color:'yellow'}} to="services" className='navItem'>SERVICES</NavLink></Nav.Link>
             <Nav.Link><NavLink exact activeStyle={{color:'yellow'}} to="courses" className='navItem'>COURSES</NavLink></Nav.Link>
             <Nav.Link><NavLink exact activeStyle={{color:'yellow'}} to="portfolio" className='navItem'>PORTFOLIO</NavLink></Nav.Link>
             <Nav.Link><NavLink exact activeStyle={{color:'yellow'}} to="contact" className='navItem'>CONTACT</NavLink></Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/element" element={<Element />} />
            <Route path="/blogdetails" element={<Blogdetails />} />
          </Routes>
      </div>
     
    )
  }
}

export default Header