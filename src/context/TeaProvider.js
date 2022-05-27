import { createContext, useState, useReducer } from 'react';

export const teaContext = createContext();

const ingredientReducer = (ingredients, { type, payload }) => {
  switch (type) {
    case 'CREATE':
      return [payload, ...ingredients];
    case 'UPDATE':
      return ingredients.map((ingredient) => (ingredient.id === payload.id ? payload : ingredient));
    case 'DELETE':
      return ingredients.filter((ingredient) => ingredient.id !== payload.id);
    default:
      throw new Error(`Action ${type} is invalid`);
  }
};

export default function TeaProvider({ children }) {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);

  const teaState = {
    ingredients,
    dispatch,
  };

  return <teaContext.Provider value={teaState}>{children}</teaContext.Provider>;
}
