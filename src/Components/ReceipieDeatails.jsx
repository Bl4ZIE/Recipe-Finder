import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        if (data.meals) {
          setRecipe(data.meals[0]);
        }
      } catch (err) {
        console.error('Error fetching recipe:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipeDetails();
  }, [id]);

  //////Naviagtion to the HomePage/// 

  const goBack = () => navigate('/');
      

  ////////Loading Phase/////
  if (loading) {
    return <div className="recipe-loading">Loading recipe...</div>;
  }

  if (!recipe) {
    return (
      <div className="recipe-notfound">
        <p>Recipe not found.</p>
        <button onClick={goBack} className="back-button">← Back to Search</button>
      </div>
    );
  }

  //////Get ingredients and measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ name: ingredient, measure });
    }
  }



  
  // /////// Split instructions Into the lines/////

  
  const instructions = recipe.strInstructions
    ? recipe.strInstructions.split(/\r?\n\r?\n/).filter(Boolean)
    : [];

  return (
    <div className="recipe-details-container">
      <div className="back-button-wrapper">
        <button onClick={goBack} className="back-button">← Back to Search</button>
      </div>
      <div className="recipe-header">

        <div className="recipe-image-wrapper">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
        </div>
        <div className="recipe-info">
          <h1 className="recipe-title">{recipe.strMeal}</h1>
          <div className="recipe-meta">
            <div className="meta-item">
              <h4>Category</h4>
              <p>{recipe.strCategory}</p>
            </div>
            <div className="meta-item">
              <h4>Cuisine</h4>
              <p>{recipe.strArea}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="recipe-content">
        <section className="ingredients-section">
          <h2>Ingredients</h2>
          <div className="ingredients-list">
            {ingredients.map((item, index) => (
              <div key={index} className="ingredient-item">
                <span className="ingredient-name">{item.name}</span> :
                <span className="ingredient-measure">{item.measure}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="instructions-section">
          <h2>Instructions</h2>
          <ol className="instructions-list">
            {instructions.map((step, index) =>(
              <li key={index} className="instruction-step">
                 {step}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
};

export default RecipeDetails;
