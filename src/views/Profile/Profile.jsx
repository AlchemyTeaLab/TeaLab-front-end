import React, { useEffect, useState } from 'react';
import RecipeItem from '../../components/RecipeItem/RecipeItem';
import { useAuth } from '../../hooks/useAuth';
import { useRecipes } from '../../hooks/useRecipes';
import styles from './Profile.css';

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
      <li key={`${recipe.id}-${i}`} className={styles.recipe}>
        <RecipeItem recipe={recipe} loadRecipe={loadRecipes} />
      </li>
    ));
  } else {
    content = <p>No recipes!</p>;
  }

  return (
    <>
      <div>Profile</div>
      <section className={styles.profile}>
        <ul className={`${'ninth-step'} ${'tenth-step'}`}>{content}</ul>
        <img
          className={styles.recipeShelf}
          src="https://res.cloudinary.com/tealab/image/upload/v1654208788/vector_assets/recipeShelf.svg"
          alt="Tea spilling off a shelf"
        />
      </section>
    </>
  );
}
