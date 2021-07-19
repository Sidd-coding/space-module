import React from 'react';
import logo from './logo/spacex-logo2.jpg';

function Header() {
    return (
        <div className="space">
            <img src={logo}
                alt="logo"
                height="55px"
                width="500px"
            >
            </img>
        </div>
    )
};
export default Header;