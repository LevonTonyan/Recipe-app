import './header.css';
import Clock from '../clock/clock';
import {useState, useEffect} from 'react';



const Header = ({submit, searchBarValue,setSearchBarValue}) => {
  
    return (
        <div className="header-container">
            <form className='search-form' onSubmit={(e) => {
            e.preventDefault()
            submit()
          }}>
            <h1>Welcome to recipe app!</h1>
            <input className="search-bar"
                   type="text" value={searchBarValue}
                   onChange={(e)=> setSearchBarValue(e.target.value)}/>
            <button className='search-button' type="submit">Search</button>
          </form>
        </div>
    )
};


export default Header;