import ReactDOM from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  border: 'double',
  top: '25%',
  left: '25%',
  transform: 'translate(-25%, -25%)',
  backgroundColor: 'lightblue',
  padding: '50px',
  zIndex: 1000,
};

export default function IngredientDetail({ ingredient, open, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div style={MODAL_STYLES}>
        <h3>{ingredient.commonName}</h3>
        <h4>Scientific Name</h4>
        <p>{ingredient.scientificName}</p>
        <h4>Type</h4>
        <p>{ingredient.type}</p>
        <h4>Health Benefits:</h4>
        {ingredient.healthBenefits.map((i) => (
          <p>{i}</p>
        ))}
        <h4>Description</h4>
        <p>{ingredient.description}</p>
        <button type="button" onClick={onClose}>
          ❌
        </button>
      </div>
    </>,
    document.getElementById(`portal`)
  );
}
