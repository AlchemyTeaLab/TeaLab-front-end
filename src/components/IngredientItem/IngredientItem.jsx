import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import IngredientDetail from '../../views/IngredientDetail/IngredientDetail';
import { useState } from 'react';


export default function IngredientItem({ ingredient }) {
  // const { id, commonName, scientificName, type, healthBenefits, description } = ingredient;
  const [openModal, setOpenModal] = useState(false);

  
  return (
    <>
      <label htmlFor={ingredient.commonName}>{ingredient.commonName}</label>
      <button title="More info" onClick={() => {setOpenModal(true)}}>❔</button>
      <IngredientDetail open={openModal} onClose={() => setOpenModal(false)} ingredient={ingredient}/>
      <input
        type="checkbox"
        value={ingredient.id}
        name={ingredient.commonName}
        //onChange={handleChange}
      />
    </>
  );
}
