import React, { useEffect, useState } from 'react';
import RecipeItem from '../../components/RecipeItem/RecipeItem';
import { useAuth } from '../../hooks/useAuth';
import { useRecipes } from '../../hooks/useRecipes';
export default function Profile() {
  const { user } = useAuth();
  const { getUserRecipes, updateRecipe, removeRecipe } = useRecipes();

  const [recipes, setRecipes] = useState([]);

  const loadRecipe = async () => {
    const fullRecipes = await getUserRecipes(user.id);
    setRecipes(fullRecipes);
    console.log(fullRecipes);
    console.log('full recipes', recipes);
  };

  useEffect(() => {
    const getData = async () => {
      await loadRecipe();
    };
    getData();
  }, []);

  return (
    <>
      <div>Profile</div>
      <section>
        <ul>
          {recipes.map((recipe, i) => (
            <li key={`${recipe.id}-${i}`}>
              <RecipeItem
                recipe={recipe}
                updateRecipe={updateRecipe}
                removeRecipe={removeRecipe}
                loadRecipe={loadRecipe}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
