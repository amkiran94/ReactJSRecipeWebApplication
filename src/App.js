import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipie';

export const App = () =>{
  const APP_ID = 'b7958b21';
  const APP_KEY = 'f696dbad730541ddf06e673f21998ae8';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('icecream');
  
  useEffect(()=>{
   getRecipes();
 },[query]);

    const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
  };
  
  const getSearch = e =>{
    e.preventDefault();
     setQuery(search);
     setSearch('');
  };
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" value={search}type="text" onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button> 
      </form>
      
      <div className="recipies">
     {recipes.map(recipe =>
     (<Recipe 
              key={recipe.recipe.label}
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories} 
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
      />))}
      </div>
      </div>
  );
};
export default App;
