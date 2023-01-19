import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNav from './HeaderNav';

const Main = () => {
    return (
        <div>
            <HeaderNav/>
            <Outlet/>
        </div>
    );
};

export default Main;