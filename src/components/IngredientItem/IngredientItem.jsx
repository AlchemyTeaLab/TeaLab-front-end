import { Link } from 'react-router-dom';

export default function IngredientItem({ ingredient }) {
  const { id, commonName, scientificName, type, healthBenefits, description } = ingredient;

  function handleDetail() {
    //Pop up Detail
  };
  return (
    <>
    <input type='checkbox' value={ingredient.commonName} name={ingredient.commonName}/>
    <label htmlFor={ingredient.commonName}>{ingredient.commonName}</label>
    <button onClick={handleDetail}>❔</button>
    </>
  )
}
