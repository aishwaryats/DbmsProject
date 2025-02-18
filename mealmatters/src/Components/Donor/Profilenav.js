import React from 'react';
import "./donorstyle.css";

const Profilenav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary profile">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Meal Matters</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">        
        <li className="nav-item">
          <a className="nav-link" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Profilenav
