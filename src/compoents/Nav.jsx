import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar,  NavDropdown, FormControl, Button, Form } from 'react-bootstrap';



function  Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">SMART MOBILE</a>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="nav-item">
          <a class="nav-link p-2" href="/home">Home</a>
        </div>
    <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle p-2" href="/samsung" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Samsung
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/sphone">Mobile</a></li>
            <li><a class="dropdown-item" href="/slab">Laptop</a></li>
          </ul>
        </div>
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle p-2"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vivo
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href=" /vip">Mobile</a></li>
            <li><a class="dropdown-item" href="/vivolab">Laptop</a></li>
          </ul>
        </div>
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle p-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            IPhone
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/ip">Mobile</a></li>
            <li><a class="dropdown-item" href="/ilb">Laptop</a></li>
          </ul>
        </div>
    <div class="collapse navbar-collapse d-flex justify-content-end"  id="navbarSupportedContent">
      
      <div class="d-flex justify-content-end">
      <a class="nav-link active p-2" aria-current="page" href="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg></a>
        <Button class="nav-link active" aria-current="page" href="login" style={{margin : '10px'}}>Login/Signup</Button>
       
        

        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
        

      </div>
    </div>
  </div>
</nav>   
 );
}

export default Nav;
