import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import recipes from '../data/recipes';
import './Recipes.css';

export default function Recipes() {
  useScrollAnimation();

  return (
    <div className="recipes-page fade-up">
      <section className="recipes-hero">
        <div className="container text-center">
          <h1>Farm-Fresh Recipes</h1>
          <p>Delicious meals made with Farmish Kathol.</p>
        </div>
      </section>
      
      <section className="recipes-content">
        <div className="container">
          <div className="recipe-grid">
            {(recipes || []).map(recipe => (
              <Link to={`/recipe/${recipe.slug}`} key={recipe.id} className="recipe-card-link">
                <div className="recipe-card">
                  <img src={recipe.image} alt={recipe.name} />
                  <div className="recipe-content">
                    <span className="recipe-badge">{recipe.difficulty}</span>
                    <h3>{recipe.name}</h3>
                    <p className="recipe-main-prod">Main: {recipe.mainProduct}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
