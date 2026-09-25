import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import recipes from '../data/recipes';
import './RecipeDetail.css';

export default function RecipeDetail() {
  const { slug } = useParams();
  useScrollAnimation();
  
  const recipe = (recipes || []).find(r => r.slug === slug);

  if (!recipe) {
    return (
      <div className="recipe-detail-page container section-padding" style={{ textAlign: 'center' }}>
        <h1>Recipe Not Found</h1>
        <p>Sorry, we couldn't find that recipe.</p>
        <Link to="/recipes" className="btn btn-primary" style={{ marginTop: '20px' }}>Browse Recipes</Link>
      </div>
    );
  }

  return (
    <div className="recipe-detail-page fade-up">
      <div className="recipe-hero">
        <img src={recipe.image} alt={recipe.name} />
      </div>
      <div className="container recipe-main">
        <h1>{recipe.name}</h1>
        <div className="recipe-meta-detail">
          <span>Prep: {recipe.prepTime}</span>
          <span>Cook: {recipe.cookTime}</span>
          <span>Difficulty: {recipe.difficulty}</span>
          <span>Servings: {recipe.servings}</span>
        </div>
        
        <div className="recipe-body">
          <div className="ingredients">
            <h2>Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
            </ul>
            <Link to={`/product/${recipe.productSlug}`} className="btn btn-primary" style={{ marginTop: '20px' }}>Shop {recipe.mainProduct}</Link>
          </div>
          <div className="instructions">
            <h2>Instructions</h2>
            <ol>
              {recipe.instructions.map((inst, i) => <li key={i}>{inst}</li>)}
            </ol>
            {recipe.tips && (
              <div className="recipe-tips">
                <h3>💡 Tips</h3>
                <p>{recipe.tips}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
