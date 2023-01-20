/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartList } from '../../redux/action/CartListAction';



const HeaderNav = () => {


  const cartlist = useSelector(
    (state) => state.product.cart
  );



    return (
        <header>
                
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <div className="container">
    
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        Student
      </a>
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to={`/`}>Home</Link>
        </li>
     
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      
    </div>
    

    
    <div className="d-flex align-items-center">
      
      <Link className="text-reset me-3" to="cartlist">
        <i className="fas fa-shopping-cart"></i>
        <span className="badge rounded-pill badge-notification bg-danger">{cartlist?.length}</span>
      </Link>

      
      <div className="dropdown">
        <a
          className="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-bell"></i>
          <span className="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
      
      </div>
      
      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
              <Link className="dropdown-item" to="/dasboard/add-product">Dashboard</Link>
          </li>
          <li>
              <Link className="dropdown-item" to="/dasboard/manage-product">Manage Product  </Link>
          </li>
          <li>
            <a className="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
  
</nav>

        </header>
    );
};

export default HeaderNav;