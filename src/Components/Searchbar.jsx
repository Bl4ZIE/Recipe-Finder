import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Searchbar = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);


    ///////Data fetched//////
    const loadRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        console.log(data.meals)
        setRecipes(data.meals || []);
      } catch (error) {
        console.error('Error loading recipes:', error);
        setRecipes([]);
      } 
    };
         useEffect(() => {
           loadRecipes();
           }, []);


  /////With Input search /////// 
  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error('Error searching recipes:', error);
      setRecipes([]);
    } 
  };


  return (
    <div className="searchbar-container">
      <div className="search-box">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}      
          placeholder="Search meals..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {loading}

      <div className="results-grid">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.idMeal} className="card">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{recipe.strMeal}</h3>
                <div className="card-meta">
                  <span> {recipe.strArea}</span>
                  <span> {recipe.strCategory}</span>
                </div>
                 <Link to={`/recipes/${recipe.idMeal}`}>
                  <button className="card-button">View Recipe</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div>
             <p className="no-results">No recipes found. Try another search.</p>
             
             </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;




