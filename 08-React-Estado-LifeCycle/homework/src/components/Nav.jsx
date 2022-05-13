import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-light bg-light">
      <h3 className="navbar-brand">Henry - Weather App</h3>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;
