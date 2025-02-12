import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
    return (
      <div className="navigation">
        <div id="navbar"></div>

      <Link to={"/blue"}>Blue</Link>
      <br/>
      <Link to={"/red"}>Red</Link>
      <br/>

      <Link to={"/"}>Home</Link>
      <br/>

      <Link to={"/navigation"}>Navigation</Link>
      </div>
    );
  }
  export default Navigation