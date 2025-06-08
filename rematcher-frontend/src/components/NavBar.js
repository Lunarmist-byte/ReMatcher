import React from 'react';
import {Link} from 'react-router-dom';

const NavBar=()=>{
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-3'>
            <Link className='navbar-band' to='/'>ReMatcher</Link>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'>Upload</Link>
                    </li>
                    <li className='nav-item'>
                        <link className='nav-link' to='/jobs'>Jobs</link>
                    </li>
                    <li className='nav-item'>
                        <link className='nav-link' to='/results'>Results</link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;