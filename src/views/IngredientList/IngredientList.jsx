import { useEffect, useState } from 'react';
import { useIngredients } from '../../hooks/useIngredients';



export default function IngredientList() {
  const { ingredients, getListIngredients } = useIngredients();

  // const [ingredients, setIngredients] = useState([]);
  // const [results, setResults] = useState([]);
  // const [search, setSearch] = useState('');
 
  
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
        
        <ul>
            {ingredients.map((ingredient, i) => {
                return (
                    <li key={`${ingredient.id} - ${i}`}>
                        {ingredient.commonName}
                    </li>
                )
            })}
        </ul>
        
    
    </>
  )
}