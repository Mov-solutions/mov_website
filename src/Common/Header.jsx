import React, { Component } from 'react'
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
            <div className="header-area">
              <div className="main-header header-sticky" >
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-xl-2 col-lg-2 col-md-1">
                    <Link to="/"><img src="assets/img/logo/logo.png" alt=""/></Link>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-10">
                      <div className="menu-main d-flex align-items-center justify-content-end">
                        <div className="main-menu f-right d-none d-lg-block">
                          <nav>
                            <ul id="navigation">
                              <li>
                                <Link to="/">Home</Link>
                              </li>
                              <li>
                                <Link to="/about">About</Link>
                              </li>
                              <li>
                                <Link to="/service">Service</Link>
                              </li>
                              <li>
                                <Link to="/portfolio">Portfolio</Link>
                              </li>
                              <li>
                                <Link to="#">Page</Link>
                                <ul className="submenu">
                                  <li>
                                    <Link to="/blog">Blog</Link>
                                  </li>
                                  <li>
                                    <Link to="/blogdetails">Blog Details</Link>
                                  </li>
                                  <li>
                                    <Link to="/element">Element</Link>
                                  </li>
                                  <li>
                                    <Link to="/portfolio_details">Portfolio Details</Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to="/contact">Contact</Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="header-right-btn f-right d-none d-xl-block ml-20">
                          <a href="#" className="btn header-btn">
                            Get Free Consultation
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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