import React from 'react';

function RecipeList({ recipes, onRecipeSelect }) {
  return (
    <div className="recipe-list">
      <h2 className='recipe_list_h2'>Recipes</h2>
      <ul className="recipe_list_ul">
        {recipes.map(recipe => (
          <li className="recipe_list_li"  key={recipe.id} onClick={() => onRecipeSelect(recipe)} data-testid="recipe-list-item"> 
            {recipe.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
