import { useState } from 'react';
import { useRecipes } from '../../hooks/useRecipes';

export default function RecipeItem({ recipe, loadRecipe: loadRecipes }) {
  const [isEditing, setIsEditing] = useState(false);
  const [recipeNotes, setRecipeNotes] = useState(recipe.notes);
  const { updateRecipe, removeRecipe } = useRecipes();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateRecipe({
      id: recipe.id,
      name: recipe.name,
      userId: recipe.user_id,
      notes: recipeNotes,
    });
    await loadRecipes();
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await removeRecipe(recipe.id);
    setIsEditing(false);
    await loadRecipes();
  };

  let content;
  if (!isEditing) {
    content = (
      <>
        <h3>{recipe.name} </h3>
        <div>
          {recipe.ingredients.map((ingredient, i) => {
            return (
              <figure key={`${ingredient.id}-${i}`}>
                <img src={ingredient.image} alt={ingredient.common_name} />
                <figcaption>{ingredient.common_name}</figcaption>
              </figure>
            );
          })}
        </div>

        <p>{recipe.notes || null}</p>
        <div>
          <button type="button" onClick={() => setIsEditing(true)}>
            {recipe.notes ? 'Edit Notes' : 'Add Notes'}
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
            onChange={(e) => setRecipeNotes(e.target.value)}
          />
          <button type="submit" aria-label="Save changes">
            Save
          </button>
          <button
            type="button"
            aria-label="Delete recipe"
            onClick={handleDelete}
          >
            Delete
          </button>
        </form>
      </>
    );
  }
  return content;
}
