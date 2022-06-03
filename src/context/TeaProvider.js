import { createContext, useReducer } from 'react';

export const teaContext = createContext();

const ingredientReducer = (ingredients, { type, payload }) => {
  switch (type) {
    case 'CREATE':
      return [payload, ...ingredients];
    case 'UPDATE':
      return ingredients.map((ingredient) =>
        ingredient.id === payload.id ? payload : ingredient
      );
    case 'LOAD':
      return payload;
    case 'DELETE':
      return ingredients.filter((ingredient) => ingredient.id !== payload.id);
    default:
      throw new Error(`Action ${type} is invalid`);
  }
};

const recipeReducer = (recipes, { type, payload }) => {
  switch (type) {
    case 'CREATE':
      return [payload, ...recipes];
    case 'UPDATE':
      return recipes.map((recipe) =>
        recipe.id === payload.id ? payload : recipe
      );
    case 'DELETE':
      return recipes.filter((recipe) => recipe.id !== payload.id);
    default:
      throw new Error(`Action ${type} is invalid`);
  }
};

export default function TeaProvider({ children }) {
  const [ingredients, ingredientDispatch] = useReducer(ingredientReducer, []);
  const [recipes, recipeDispatch] = useReducer(recipeReducer, []);

  const teaState = {
    ingredients,
    ingredientDispatch,
    recipes,
    recipeDispatch,
  };

  return <teaContext.Provider value={teaState}>{children}</teaContext.Provider>;
}
