import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import Header from "./Header.tsx";
const NavBar = () => {
  return (
    <div>
      {" "}
      <div className="leftSide">
        <Header value={0}></Header>
        <Link to="/"> Home </Link>
        <Link to="/h"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  );
};

export default NavBar;
