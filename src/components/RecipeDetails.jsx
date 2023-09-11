import React from 'react';

function RecipeDetails({ recipe }) {
  return (
    <div className="recipe-details">
      <h2 className='recipe_details_h2'>{recipe.title}</h2>
      <p className='recipe-details_p'>{recipe.description}</p>
      {/* Display other recipe details */}
    </div>
  );
}

export default RecipeDetails;
