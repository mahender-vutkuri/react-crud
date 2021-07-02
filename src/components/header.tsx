import React from "react";
import "./header.css";
import {  Link } from "react-router-dom";
function HeaderComponent(props: any) {
  return (
    <nav className="navbar">
      <ul>
        
        <li>
          <Link to="/jsx">jsx</Link>
        </li>
        <li>
          <Link to="/userlist">Users</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/savedusers">Show Users</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderComponent;
