import React from 'react';
import { NavLink } from 'react-router-dom';
import './topBar.css';
import TopBarTimeDate from './topBarTimeDate';

export default function TopBar({navs}) {
    return (
        <header id = "top-bar">
            <nav id = "top-bar-links">
                {navs.map((nav, index) =>
                    <NavLink
                        key = {index}
                        className = {currentNavLink => "top-bar-element-clickable " + (
                            currentNavLink.isActive
                                ? "top-bar-element-clickable-active"
                                : "top-bar-element-clickable-inactive"
                        )}
                        to = {nav.link}
                    >
                        {nav.title}
                    </NavLink>
                )}
            </nav>
            <div className = "top-bar-element-non-clickable">
                <TopBarTimeDate/>
            </div>
        </header>
    );
}