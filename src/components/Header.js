import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <div className="logo">Company Logo</div>
    <div className="nav">
      <NavLink activeClassName="is-active" exact={true} to="/">
        Home
      </NavLink>
      <NavLink activeClassName="is-active" to="/contact">
        Contact Us
      </NavLink>
    </div>
  </div>
);

export default Header;
