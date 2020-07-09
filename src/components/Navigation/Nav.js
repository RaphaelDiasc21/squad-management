import React from 'react';
import { BrowserRouter,  Link } from 'react-router-dom';
import Routes from './Routes';

const Nav = () =>{
    return(
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Teams's board</Link>
                    </li>
                    <li>
                        <Link to="/create-team">Create team</Link>
                    </li>
                </ul>
            </nav>
            <Routes />
        </BrowserRouter>
    )
}

export default Nav;