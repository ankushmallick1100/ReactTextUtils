import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`}  data-bs-theme={`${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
            {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/">Action</a></li>
          <li><a className="dropdown-item" href="/">Another action</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="/">Something else here</a></li>
        </ul>
      </li> */}
            {/* <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}

          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'15px',width:'30px',cursor:"pointer"}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'15px',width:'30px',cursor:"pointer"}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'15px',width:'30px',cursor:"pointer"}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'15px',width:'30px',cursor:"pointer"}}></div> 
          </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
            </div>

        </div>
      </div>
    </nav>
    
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
