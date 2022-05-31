import { useEffect, useState } from 'react';
import IngredientItem from '../../components/IngredientItem/IngredientItem';
import { useIngredients } from '../../hooks/useIngredients';
import { useRecipes } from '../../hooks/useRecipes';

export default function IngredientList() {
  const { ingredients, getListIngredients } = useIngredients();
  const { addRecipe } = useRecipes();
  const [bases, setBases] = useState([]);
  const [flavors, setFlavors] = useState([]);
  const [boosts, setBoosts] = useState([]);

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
    e.target.checked && setBases([...bases, e.target.value]);
    !e.target.checked && setBases(bases.filter((i) => i.id !== e.target.value));
  }

  async function handleBrew(e) {
    e.preventDefault();
    await addRecipe({ name: '', user_id, notes });
  }

  return (
    <>
      <h2>List of Ingredients</h2>

      {/* <input
                    placeholder="Search for a Ingredient"
                    value={search}
                    onChange={(e) => {handleSearch(e)}} /> */}
      <form>
        <div>
          <ul>
            <h3>Base</h3>
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
          <ul>
            <h3>Flavor</h3>
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
          <ul>
            <h3>Boost</h3>
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
        </div>

        <button>Brew!</button>
      </form>
    </>
  );
}
