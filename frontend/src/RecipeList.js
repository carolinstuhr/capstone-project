import React from 'react'
import recipeData from './RecipeList.json'

export default function RecipeList() {
  return (
    <div>
      {recipeData.map((recipe) => (
        <section>
          <h3>{recipe.title}</h3>
          <ul>
            {recipe.tags.map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
