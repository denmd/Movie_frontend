import React, { useState, useEffect } from 'react';
import "./Favourite.css"
import Header from '../../Components/Header/Header';
import Larrow from "../../assets/larrow.png"
import SearchLogo from "../../assets/search-lg.png"
import Moviecards from '../../Components/Moviecards/Moviecards';
import CrossLogo from "../../assets/cross.png"

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
    setSearchResults(storedFavorites);  
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term) {
      const filteredResults = favorites.filter(movie =>
        movie.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults(favorites);
    }
  };
  const handleClearSearch = () => {
    setSearchTerm(""); 
    setSearchResults(favorites); 
  };

  return (
    <div className="favorites-page">
      <Header/>
      <div className="favorite-body">
        <div className="body-head">
          <div className="title-icon">
            <div className="arraow-div"><img src={Larrow} alt="Back Arrow" /></div>
            <h2 className="favorites-title">My Favorites</h2>
          </div>
          <div className="fav-search-bar">
            <img src={SearchLogo} alt="Search Logo" />
            <input
              type="text"
              placeholder="Search movies and series"
              value={searchTerm}
              onChange={handleSearch}
            />
               {searchTerm && ( 
              <img 
                src={CrossLogo} 
                alt="Clear Search"
                className="clear-search-icon"
                onClick={()=>handleClearSearch()}
              />
            )}
          </div>
        </div>
        <div className="favourite-list">
          {searchTerm ? (
            <Moviecards results={searchResults}  />
          ) : (
            <Moviecards results={favorites}  />
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
