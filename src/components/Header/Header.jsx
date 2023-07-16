import React from 'react';
import './header.css';

function Header() {
    return (
        <div>
            <header>
                <h2 className="logo">MenRis</h2>
                <nav className="navigation">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <button className="button-login-popup">Login</button>
                </nav>
            </header>
        </div>
    );
}

export default Header;
