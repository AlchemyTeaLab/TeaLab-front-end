import React, { useEffect, useState } from 'react';
import RecipeItem from '../../components/RecipeItem/RecipeItem';
import { useAuth } from '../../hooks/useAuth';
import { useRecipes } from '../../hooks/useRecipes';
export default function Profile() {
  const { user } = useAuth();
  const { getUserRecipes, updateRecipe, removeRecipe } = useRecipes();
  const [recipes, setRecipes] = useState([]);

  const loadRecipes = async () => {
    const fullRecipes = await getUserRecipes(user.id);
    setRecipes(fullRecipes);
  };

  useEffect(() => {
    const getData = async () => {
      await loadRecipes();
    };
    getData();
  }, []);

  let content;
  if (recipes.length > 0) {
    content = recipes.map((recipe, i) => (
      <li key={`${recipe.id}-${i}`}>
        <RecipeItem recipe={recipe} loadRecipe={loadRecipes} />
      </li>
    ));
  } else {
    content = <p>No recipes!</p>;
  }

  return (
    <>
      <div>Profile</div>
      <section>
        <ul>{content}</ul>
      </section>
    </>
  );
}
