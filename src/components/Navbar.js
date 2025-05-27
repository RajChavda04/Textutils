import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import {Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <>
      <div className="main">
        <nav className="navbar navbar-expand-lg bg-body-tertiary"  >
          <div className="container-fluid"  >
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="my-2 navbar-nav me-auto my-lg-0 navbar-nav-scroll" >
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/About" >About</Link>
                </li>
              </ul>
              {/* <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,

}