import { useEffect, useState } from 'react';
import IngredientItem from '../../components/IngredientItem/IngredientItem';
import { useIngredients } from '../../hooks/useIngredients';

export default function IngredientList() {
  const { ingredients, getListIngredients } = useIngredients();

  
 
  
//   const searching = !!search.length;
//   const list = searching ? results : ingredients;

//   const handleSearch = (event) => {
//     setSearch(event.target.value);
//     const filteredSearch = ingredients.filter((ingredient) => 
//     ingredient.name.toLowerCase().includes(event.target.value.toLowerCase().trim()));
//     setResults(filteredSearch);
// }

  useEffect(() => {
    async function getIngredients()  {
      await getListIngredients();
    }  
          
    getIngredients();
}, []);


  return (
    <>
    <h2>List of Ingredients</h2>
    
    
    {/* <input
                    placeholder="Search for a Ingredient"
                    value={search}
                    onChange={(e) => {handleSearch(e)}} /> */}
        <form>
        <ul>
            {ingredients.map((ingredient, i) => {
                return (
                    <li key={`${ingredient.id} - ${i}`}>
                        <IngredientItem ingredient={ingredient}/>
                    </li>
                )
            })}
        </ul>
        <button>Brew!</button>
        </form>
        
        
    
    </>
  )
}