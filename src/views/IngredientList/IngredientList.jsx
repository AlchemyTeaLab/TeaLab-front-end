import { useEffect, useState } from 'react';
import IngredientItem from '../../components/IngredientItem/IngredientItem';
import { useIngredients } from '../../hooks/useIngredients';
import { useRecipes } from '../../hooks/useRecipes';
import { useAuth } from '../../hooks/useAuth';
import styles from './IngredientList.css';

export default function IngredientList() {
  const { user } = useAuth();
  const { ingredients, getListIngredients } = useIngredients();
  const { addRecipe } = useRecipes();
  const [recipeItems, setRecipeItems] = useState([]);

  //   const searching = !!search.length;
  //   const list = searching ? results : ingredients;

  //   const handleSearch = (event) => {
  //     setSearch(event.target.value);
  //     const filteredSearch = ingredients.filter((ingredient) =>
  //     ingredient.name.toLowerCase().includes(event.target.value.toLowerCase().trim()));
  //     setResults(filteredSearch);
  // }

  useEffect(() => {
    async function getIngredients() {
      await getListIngredients();
    }

    getIngredients();
  }, []);

  function handleChange(e) {
    const newRecipe = e.target.checked
      ? [...recipeItems, e.target.value]
      : recipeItems.filter((i) => i !== e.target.value);
    setRecipeItems(newRecipe);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await addRecipe({
      recipe: { name: 'Recipe', userId: user.id, notes: '' },
      recipeItems,
    });
  }

  return (
    <>
      <h2>List of Ingredients</h2>

      {/* <input
                    placeholder="Search for a Ingredient"
                    value={search}
                    onChange={(e) => {handleSearch(e)}} /> */}
      <form className={styles.ingredients} onSubmit={handleSubmit}>
        <div>
          <section>
            <h3>Base</h3>
            <ul>
              {ingredients
                .filter((i) => i.type === 'Base')
                .map((ingredient, i) => {
                  return (
                    <li key={`${ingredient.id} - ${i}`}>
                      <IngredientItem
                        ingredient={ingredient}
                        handleChange={handleChange}
                      />
                    </li>
                  );
                })}
            </ul>
          </section>

          <section>
            <h3>Flavor</h3>
            <ul>
              {ingredients
                .filter((i) => i.type === 'Flavor')
                .map((ingredient, i) => {
                  return (
                    <li key={`${ingredient.id} - ${i}`}>
                      <IngredientItem
                        ingredient={ingredient}
                        handleChange={handleChange}
                      />
                    </li>
                  );
                })}
            </ul>
          </section>

          <section>
            <h3>Boost</h3>
            <ul>
              {ingredients
                .filter((i) => i.type === 'Boost')
                .map((ingredient, i) => {
                  return (
                    <li key={`${ingredient.id} - ${i}`}>
                      <IngredientItem
                        ingredient={ingredient}
                        handleChange={handleChange}
                      />
                    </li>
                  );
                })}
            </ul>
          </section>
        </div>

        <button className={styles.brew}>Brew!</button>
      </form>
    </>
  );
}
