import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="CoreNotes Logo" />
            <h4>CoreNotes</h4>
            <input type="text" placeholder="Pesquisar notas..." />
        </div>
    );
}

export default Header;
