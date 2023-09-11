import React from 'react';


function Home({ onRecipeListClick }) {
  return (
    <div className="home" data-testid="home">
      <img className="home_img" src="recipe.jpg" alt="Home" />
      <button className="home_button" data-testid="home-button" onClick={onRecipeListClick}>Recipe List</button>
    </div>
  );
}


export default Home;
