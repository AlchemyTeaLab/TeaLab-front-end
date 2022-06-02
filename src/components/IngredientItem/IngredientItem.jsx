import { Link } from 'react-router-dom';
import IngredientDetail from '../../views/IngredientDetail/IngredientDetail';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import styles from './IngredientItem.css';

export default function IngredientItem({ ingredient, handleChange }) {
  const { user } = useAuth();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <label className={styles.checkbox} htmlFor={ingredient.commonName}>
        <img src={ingredient.image} alt={ingredient.commonName} />
        <span>
          {ingredient.commonName}
          <button
            className={`${styles.detail} ${'sixth-step'}`}
            type="button"
            title="More info"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <span className={styles.detail}></span>
          </button>
        </span>
        <input
          type="checkbox"
          value={ingredient.id}
          name={ingredient.commonName}
          onChange={handleChange}
          disabled={!user.email}
          title={
            !user.email
              ? 'Sign in to create a recipe!'
              : `Add ${ingredient.commonName} to your recipe!`
          }
        />

        <IngredientDetail
          open={openModal}
          onClose={() => setOpenModal(false)}
          ingredient={ingredient}
        />
      </label>
    </>
  );
}
