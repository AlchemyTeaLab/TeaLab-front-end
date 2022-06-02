import { useEffect, useState } from 'react';
import IngredientItem from '../../components/IngredientItem/IngredientItem';
import { useIngredients } from '../../hooks/useIngredients';
import { useRecipes } from '../../hooks/useRecipes';
import { useAuth } from '../../hooks/useAuth';
import styles from './IngredientList.css';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useTour } from '@reactour/tour';

export default function IngredientList() {
  const history = useHistory();
  const { user } = useAuth();
  const { ingredients, getListIngredients } = useIngredients();
  const { addRecipe } = useRecipes();
  const [recipeItems, setRecipeItems] = useState([]);
  const [type, setType] = useState('');
  const { setDisabledActions, setCurrentStep } = useTour();

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
    setType('Base');
  }, []);

  useEffect(() => {
    setTimeout(() => {
      type && user.email && toast(`Choose your ${type}(s)...`);
    }, 1500);
  }, [type]);

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
    toast('Your recipe has been put on the shelf!');
    setType('');
    history.push('/profile');
  }

function handleSumbitForTour() {
    setDisabledActions(false);
    setCurrentStep(8);
  }

  return (
    <>
      {/* <h2>List of Ingredients</h2> */}

      {/* <input
                    placeholder="Search for a Ingredient"
                    value={search}
                    onChange={(e) => {handleSearch(e)}} /> */}
      <form className={`${styles.ingredients} ${'fifth-step'} ${'seventh-step'}`} onSubmit={handleSubmit}>
        <div>
          {type !== '' && (
            <section>
              <h3>{type}</h3>
              <ul>
                {ingredients
                  .filter((i) => i.type === type)
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
              {(type === 'Base' || type === 'Flavor') && (
                <button
                  title={
                    !user.email
                      ? 'Sign in to create a recipe!'
                      : user.email && !recipeItems.length
                      ? `Select a ${type} to continue`
                      : user.email && type === 'Base'
                      ? `Add your ${type} and continue to flavor`
                      : user.email && type === 'Flavor'
                      ? `Add your ${type} and continue to boost`
                      : null
                  }
                  disabled={!recipeItems.length}
                  className={styles.brew}
                  type="button"
                  onClick={() => {
                    setType(type === 'Base' ? 'Flavor' : 'Boost');
                  }}
                >
                  <span className={styles.brew}></span>
                  {type === 'Base' ? 'Add Base' : 'Add Flavor'}
                </button>
              )}
              {type === 'Boost' && (
                <button title="Brew your tea!" className={styles.brew}>
                  <span className={styles.brew} onClick={handleSumbitForTour}></span>
                  Brew!
                </button>
              )}
            </section>
          )}
        </div>
      </form>
    </>
  );
}
