import React from 'react'

export default function IngredientItem({ ingredient, handleChange }) {
  return (
    <>
    <input type='checkbox' value={ingredient.id} name={ingredient.commonName} onChange={handleChange} />
    <label htmlFor={ingredient.commonName}>{ingredient.commonName}</label>
    <button>❔</button>
    </>
  )
}
