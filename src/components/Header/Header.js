import React from 'react';

import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="header" >
            
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/manage">Inventory Manage</a>
            </nav>
            </div>
           
        </div>
    );
};

export default Header;