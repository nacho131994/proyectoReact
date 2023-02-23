import React from "react";
import ReactDOM from "react-dom";

const NavBar = ()=>{
    return (
    <>
   <div className="navbar-brand navbar navbar-dark bg-dark w-100">
    <h3 className = "mx-5">Start Bootstrap</h3>
  <ul className="nav justify-content-end me-5">
  <li className="nav-item">
    <a className="nav-link active text-white" aria-current="page" >Home</a>
  </li>
  <li className="nav-item ">
    <a className="nav-link text-muted" >About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-muted" >Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-muted" >Contact</a>
  </li>
  
</ul>
</div>
</>
)
};

export default NavBar; 