import React from 'react';

export default function IngredientItem({ ingredient, handleChange }) {
  return (
    <>
      <label htmlFor={ingredient.commonName}>{ingredient.commonName}</label>
      <button title="More info">❔</button>
      <input
        type="checkbox"
        aria-label="checkbox"
        value={ingredient.id}
        name={ingredient.commonName}
        onChange={handleChange}
      />
    </>
  );
}
