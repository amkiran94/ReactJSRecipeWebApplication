//import React from 'react';
import * as React from 'react';
import './App.css';


const Recipe = ({title,calories,image,ingredients}) => {
return(
    
    <div className="list-items" >
     <h1>{title}</h1>
        <p>Calories: {calories}</p>
        <img src={image} alt="something"/>
        <h3>Ingredients</h3>
        <ol>
             {ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}
        </ol>
    </div>
);
}

export default Recipe;