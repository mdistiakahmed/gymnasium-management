import React from 'react';
import Logo from '../../../assets/logo.png';
import './Header.css';
import { data } from './headerData';
import MenuItems from './MenuItems';

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
                <img src={Logo} alt="" className="logo" />
            </div>
            <div>
                <input type="checkbox" id="menu-bar" />
                <label htmlFor="menu-bar">Menu</label>
            </div>
            <div className="menu">
                <ul
                    style={{
                        display: 'flex',
                        listStyle: 'none',
                        gap: 5,
                    }}
                >
                    {data.map((d, idx) => (
                        <MenuItems
                            key={idx}
                            name={d.name}
                            submenus={d.submenu}
                        />
                    ))}
                </ul>
                <div className="cta">
                    <span>
                        <a href="/" className="joinAnchor">
                            Join Us
                        </a>{' '}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
