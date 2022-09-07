import React from 'react';
import './MenuItems.css';

type MenuItemsProps = {
    name: string;
    submenus: string[];
};

const MenuItems = ({ name, submenus }: MenuItemsProps) => {
    return (
        <li className="menu-item-container">
            <span className="name">{name}</span>
            <ul className="sub-menu">
                {submenus.map((s, idx) => (
                    <li className="items" key={idx}>
                        <span className="icons"> </span>
                        {s}
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default MenuItems;
