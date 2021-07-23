import React from 'react';
import logo from './logo/spacex-logo2.jpg';

function Header() {
    return (
        <div className="app_bar">
            <div className="img_container container">
                <img src={logo}
                    alt="logo"
                    height="55px"
                    width="500px"
                >
                </img>
            </div>
        </div>
    )
};
export default Header;