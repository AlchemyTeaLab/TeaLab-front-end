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
        <h3>Common Name: {ingredient.commonName}</h3>
        <p>Scientific Name: {ingredient.scientificName}</p>
        <p>Type: {ingredient.type}</p>
        <p>Health Benefits: {ingredient.healthBenefits}</p>
        <p>Description: {ingredient.description}</p>
        <button type="button" onClick={onClose}>
          {' '}
          ❌{' '}
        </button>
      </div>
    </>,
    document.getElementById(`portal`)
  );
}
