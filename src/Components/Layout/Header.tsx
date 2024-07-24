import React from 'react'
let logo = require('../../Assets/Images/storeLogo.png');

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} style={{height: "60px"}} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto m-1">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-house-door-fill"></i> Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-cart-plus-fill"></i> Orders</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-boxes"></i> Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-person-lines-fill"></i> Customers</a>
            </li>
            </ul>
            <ul className="navbar-nav ms-auto m-1">
            <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-tools"></i> Admin
              </a>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li><a className="dropdown-item" href="#">Products</a></li>
                <li><a className="dropdown-item" href="#">Orders</a></li>
                <li><a className="dropdown-item" href="#">Users</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header

export { };