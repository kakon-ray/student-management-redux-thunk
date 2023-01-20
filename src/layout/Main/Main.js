import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';
import HeaderNav from '../Component/HeaderNav';

const Main = () => {
    return (
        <div>
            <HeaderNav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;