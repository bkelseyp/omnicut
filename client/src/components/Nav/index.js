import React from "react";
import './style.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bkgndNavbar">
      <a className="navbar-brand brandLogo" href="/">OmniCut</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item brandPageNames">
            <a className="nav-link" href="/About">About <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item brandPageNames">
            <a className="nav-link" href="/Vendor">Vendor <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item brandPageNames">
            <a className="nav-link" href="/Customer">Customer <span className="sr-only">(current)</span></a>
          </li>

        </ul>
        <ul className="navbar-nav">
          <li className="nav-item ">
            <a className="nav-link textColor text-primary" href="/LogIn">
              Log In <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link textColor text-primary" href="/SignUp">
              Sign Up <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
