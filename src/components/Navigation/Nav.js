import React from 'react';
import { BrowserRouter,  Link } from 'react-router-dom';
import Routes from './Routes';

const Nav = () =>{
    return(
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

export default Nav;