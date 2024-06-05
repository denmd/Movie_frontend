import React from 'react';
import './Header.css';
import MovieLogo from "../assets/movie.png"
import SearchLogo from "../assets/search-lg.png"
import FavourLogo from "../assets/favourites.png"

const Header = () => {
  return (
    <header className="header">
      <div className='search-content'>
        <div className='icon-title'>
            <div className='icon'>
            <img src={MovieLogo}></img>
            </div>
            <h3>GET MOVIES</h3>
        </div>
        <div className="search-bar">
        <img src={SearchLogo}></img>
        <input
          type="text"
          placeholder="Search movies and series"  
        />
      </div>
      </div>
      
      <button className="favourites-button">
      <img src={FavourLogo}></img>
        My Favourites
      </button>
    </header>
  );
};

export default Header;
