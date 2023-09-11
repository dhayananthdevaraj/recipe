
// import React, { useState } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import RecipeList from './components/RecipeList';
// import RecipeDetails from './components/RecipeDetails';
// import SearchBar from './components/SearchBar';
// import Home from './components/Home';
// import './App.css';
// import { recipes } from './recipes';

// function App() {
//   const [selectedRecipe, setSelectedRecipe] = useState(null);
//   const [showRecipeList, setShowRecipeList] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchVisible, setSearchVisible] = useState(false);

//   const handleRecipeSelect = (recipe) => {
//     setSelectedRecipe(recipe);
//     setShowRecipeList(true);
//   };

//   const handleRecipeListClick = () => {
//     setSelectedRecipe(null);
//     setShowRecipeList(true);
//     setSearchVisible(true);
//   };

//   const handleHomeClick = () => {
//     setSelectedRecipe(null);
//     setShowRecipeList(false);
//     setSearchVisible(false);
//     setSearchTerm('');
   
//   };

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     setSelectedRecipe(null);
    
//   };

 

//   const filteredRecipes = recipes.filter(
//     (recipe) =>
//       recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === ''
//   );


//   return (
//     <div className="App">
//       <Header />
//       {showRecipeList && searchVisible && <SearchBar onSearch={handleSearch} />}
//       <div className="content">
//         {showRecipeList ? (
//           <RecipeList
//             recipes={filteredRecipes} // Always show filtered recipes on Recipe List view
//             onRecipeSelect={handleRecipeSelect}
//           />
//         ) : (
//           <Home onRecipeListClick={handleRecipeListClick} filteredRecipes={filteredRecipes} />
//         )}
//         {selectedRecipe ? (
//           <div>
//             <RecipeDetails recipe={selectedRecipe} />
//             <div className='App_Button_container'>
//             <button className='App_button' onClick={handleHomeClick}>Home</button>
//             </div>
//           </div>
//         ) : (
//           <div>
//              <img className="home_img" src="recipe2.jpg" alt="Home" />
//              <div className='App_Button_container'>
//             <button className='App_button' onClick={handleHomeClick}>Home</button>
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import Home from './components/Home';
import './App.css';
import { recipes } from './recipes';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showRecipeList, setShowRecipeList] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
    setShowRecipeList(true);
  };

  const handleRecipeListClick = () => {
    setSelectedRecipe(null);
    setShowRecipeList(true);
    setSearchVisible(true);
  };

  const handleHomeClick = () => {
    setSelectedRecipe(null);
    setShowRecipeList(false);
    setSearchVisible(false);
    setSearchTerm('');
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedRecipe(null);
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === ''
  );

  return (
    <div className="App">
      <Header data-testid="header" />
      {showRecipeList && searchVisible && <SearchBar data-testid="search-bar" onSearch={handleSearch} />}
      <div className="content">
        {showRecipeList ? (
          <RecipeList
            data-testid="recipe-list"
            recipes={filteredRecipes} // Always show filtered recipes on Recipe List view
            onRecipeSelect={handleRecipeSelect}
          />
        ) : (
          <Home data-testid="home" onRecipeListClick={handleRecipeListClick} filteredRecipes={filteredRecipes} />
        )}
        {selectedRecipe ? (
          <div>
            <RecipeDetails data-testid="recipe-details" recipe={selectedRecipe} />
            <div className="App_Button_container">
              <button className="App_button" data-testid="home-button" onClick={handleHomeClick}>
                Home
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* <img className="home_img" src="recipe2.jpg" alt="Home" /> */}
            <div className="App_Button_container">
              <button className="App_button" data-testid="home-button" onClick={handleHomeClick}>
                Home
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer data-testid="footer" />
    </div>
  );
}

export default App;

 