/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../component/CustomLink';
import './Dashboard.css'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  
    return (
      <header>
          <nav id="sidebarMenu" className="card collapse d-lg-block sidebar collapse bg-white">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
        <NavLink
          to="add-product"
          activeClassName="active"
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Add Product</span>
        </NavLink>
        <NavLink
          to="manage-product"
          activeClassName="active"
          className="list-group-item list-group-item-action py-2 ripple"
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Manage Product</span>
        </NavLink>

     
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-lock fa-fw me-3"></i><span>Password</span></a
        >

        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a
        >
        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a
        >
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-globe fa-fw me-3"></i><span>International</span></a
        >
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-building fa-fw me-3"></i><span>Partners</span></a
        >
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a
        >
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-users fa-fw me-3"></i><span>Users</span></a
        >
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a
        >
      </div>
    </div>
  </nav>
      </header>
    );
};

export default Sidebar;