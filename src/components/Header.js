import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';
import { FaSearch } from 'react-icons/fa';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="CoreNotes Logo" />
            <h4>CoreNotes</h4>
            <div className='search'>
                <input type="text" placeholder="Pesquisar notas..." />
                <FaSearch className='faSearch' />
            </div>

        </div>
    );
}

export default Header;
