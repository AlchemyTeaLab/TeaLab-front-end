import { useState } from 'react';
import styles from './RecipeItem.css';

export default function RecipeItem({
  recipe,
  updateRecipe,
  removeRecipe,
  loadRecipe,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [recipeNotes, setRecipeNotes] = useState(recipe.notes);

  console.log('recipe item', recipe);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateRecipe({
      id: recipe.id,
      name: recipe.name,
      userId: recipe.user_id,
      notes: recipeNotes,
    });
    await loadRecipe();
    setIsEditing(false);
  };

  let content;
  if (!isEditing) {
    content = (
      <>
        <section>
          {recipe.name}
          {recipe.ingredients.map((ingredient) => {
            return (
              <figure>
                <img src={ingredient.image} alt={ingredient.common_name} />
                <figcaption>{ingredient.common_name}</figcaption>
              </figure>
            );
          })}
          <label>Notes</label>
          <p>{recipe.notes}</p>
        </section>
        <div className={styles.buttons}>
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <form onSubmit={handleSubmit}>
          <h3>{recipe.name}</h3>

          <label htmlFor="notes">Notes</label>
          <input
            name="notes"
            value={recipeNotes}
            aria-label="Edit field"
            onChange={
              (e) => setRecipeNotes(e.target.value)
              // updateRecipe({
              //   ...recipe,
              //   notes: e.target.value,
              // });
            }
          />
          <button type="submit" aria-label="Save changes">
            Save
          </button>
          <button type="button" onClick={() => setIsEditing(true)}>
            Delete
          </button>
        </form>
      </>
    );
  }
  return content;
}
