import React from 'react'
import {  Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <div className='navdiv'>
        <Container className='sticlk'>
          <nav className="navbar">
            <div>
              <h1 className="logo">MY^WebSite</h1>
            </div>

            <div>
              <ul className="navitems">
                <li>
                  <Link to="/" className="links">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="links">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/service" className="links">
                    Service
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="links">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="links">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
}
