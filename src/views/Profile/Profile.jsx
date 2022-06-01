import React, { useEffect, useState } from 'react';
import RecipeItem from '../../components/RecipeItem/RecipeItem';
import { useAuth } from '../../hooks/useAuth';
import { useRecipes } from '../../hooks/useRecipes';
export default function Profile() {
  const { user } = useAuth();
  const { getUserRecipes, updateRecipe, removeRecipe } = useRecipes();

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fullRecipes = await getUserRecipes(user.id);
      setRecipes(fullRecipes);
      console.log(fullRecipes);
      console.log('full recipes', recipes);
    };
    getData();
  }, []);

  return (
    <>
      <div>Profile</div>
      <section>
        <ul>
          {/* {recipes.map((recipe, i) => (
            <li key={`${recipe.id}-${i}`}>
              <RecipeItem
                recipe={recipe}
                updateRecipe={updateRecipe}
                removeRecipe={removeRecipe}
              />
            </li>
          ))} */}
        </ul>
      </section>
    </>
  );
}
