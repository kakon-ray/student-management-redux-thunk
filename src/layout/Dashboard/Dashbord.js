import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';
import HeaderNav from '../Component/HeaderNav';
import Sidebar from './Sidebar';

const Dashbord = () => {
    return (
        <>
           
                <div className='row'>
                    <HeaderNav/>
                    <div className='col-lg-3'>
                        <Sidebar/>
                    </div>
                    <div className='col-lg-9'>
                    <Outlet/>
                    </div>

                    <Footer/>
                </div>


         
           
        </>
    );
};

export default Dashbord;