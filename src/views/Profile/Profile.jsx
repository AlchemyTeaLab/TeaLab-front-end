import React, { useEffect } from 'react';
import RecipeItem from '../../components/RecipeItem/RecipeItem';
import { useAuth } from '../../hooks/useAuth';
import { useRecipes } from '../../hooks/useRecipes';
export default function Profile() {
  const { user } = useAuth();
  const { recipes, getUserRecipes, updateRecipe, removeRecipe } = useRecipes();

  useEffect(() => {
    const getData = async () => {
      const recipes = await getUserRecipes(user.id);
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
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
