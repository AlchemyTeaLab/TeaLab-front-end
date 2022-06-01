import { useState } from 'react';
import styles from './RecipeItem.css';

export default function RecipeItem({ recipe, updateRecipe, removeRecipe }) {
  const [isEditing, setIsEditing] = useState(false);

  console.log('RECIPE', recipe);
  let content;
  if (!isEditing) {
    content = (
      <>
        <div className={styles.buttons}>
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button type="button" onClick={() => setIsEditing(true)}>
            Delete
          </button>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <form>
          <h3>{recipe.name}</h3>
          <input
            value={recipe.notes}
            aria-label="Edit field"
            onChange={(e) => {
              updateRecipe({
                ...recipe,
                notes: e.target.value,
              });
            }}
          />
          <button type="submit" aria-label="Save changes">
            Save
          </button>
        </form>
      </>
    );
  }
  return content;
}
