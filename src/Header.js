import React from 'react';
import logo from './logo/spacex-logo2.jpg';
// import Button from './Component/Button';

function Header() {
    return (
        <div id="root-img">
            <div className="app_bar">
                <div className="img_container container">
                    <img src={logo}
                        alt="logo"
                        height="55px"
                        width="350rem"
                    >
                    </img>
                    {/* <Button /> */}
                </div>
            </div>
        </div>
    )
};
export default Header;