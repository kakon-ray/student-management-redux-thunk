import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNav from '../Main/HeaderNav';
import Sidebar from './Sidebar';

const Dashbord = () => {
    return (
        <div>
           
                <div className='row'>
                    <HeaderNav/>
                    <div className='col-lg-3'>
                        <Sidebar/>
                    </div>
                    <div className='col-lg-9'>
                    <Outlet/>
                    </div>
                </div>
         
           
        </div>
    );
};

export default Dashbord;