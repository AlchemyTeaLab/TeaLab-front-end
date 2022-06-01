import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useRecipes } from '../../hooks/useRecipes';

export default function Profile() {
  const { user } = useAuth();
  const { recipes, getUserRecipes } = useRecipes();

  useEffect(() => {
    const getData = async () => {
      await getUserRecipes(user.id);
    };
    getData();
  }, []);

  return (
    <>
      <div>Profile</div>
      <section>
        <ul>
          {' '}
          {recipes.map((recipe, i) => (
            <li key={`${recipe.id}-${i}`}>
              <RecipeItem recipe={recipe} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
