import React from 'react'

export default function IngredientItem({ ingredient }) {
  return (
    <>
    <input type='checkbox' value={ingredient.commonName} name={ingredient.commonName}/>
    <label htmlFor={ingredient.commonName}>{ingredient.commonName}</label>
    </>
  )
}
