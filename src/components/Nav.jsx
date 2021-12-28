import React from "react";
import logo from "../images/logo.svg";

function Nav() {
  return (
    <nav>
      <section className="nav-home">
        <a href="#home">
          <img src={logo} alt="logo"/>
        </a>
      </section>
      <section className="nav-item">
        <ul>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#signup">Sign In</a>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Nav;
