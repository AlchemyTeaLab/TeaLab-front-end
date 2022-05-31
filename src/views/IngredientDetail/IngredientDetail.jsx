import { Link, useParams } from 'react-router-dom';
import IngredientItem from '../../components/IngredientItem/IngredientItem';
import { useIngredients } from '../../hooks/useIngredients';
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'red',
  padding: '50px',
  zIndex: 1000
}

export default function IngredientDetail({ ingredient, open, onClose }) {
  //const { id } = useParams();
  //const { ingredient, getDetailsById } = useIngredients(id);
if (!open) return null;
  return (
    <>
    <div style={MODAL_STYLES}>Stuff
      <button onClick={onClose}> X </button>
      <h3>Common Name: {ingredient.commonName}</h3>
      <p>Scientific Name: {ingredient.scientificName}</p>
      <p>Type: {ingredient.type}</p>
      <p>Health Benefits: {ingredient.healthBenefits}</p>
      <p>Description: {ingredient.description}</p>
    </div>
    </>
    //document.getElementById(`ingredients/${id}`)
  )
}
