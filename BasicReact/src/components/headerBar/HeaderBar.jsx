import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-sm">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Name List</span>
                    <ul className='navbar-nav' role="navigation">
                        <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/about'>About</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/name-list'>Show Name List</Link></li>
                    </ul>
            </div>
         </nav>

         
    );
}

export default HeaderBar;
