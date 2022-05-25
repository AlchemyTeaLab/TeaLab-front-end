import { useContext } from 'react';
import { teaContext } from '../context/TeaProvider';
import { createIngredient } from '../services/ingredientService';

export const useTea = () => {
  const context = useContext(teaContext);
  if (context === undefined) {
    throw new Error('useTea must be used within TeaProvider');
  }

  const { ingredients, dispatch } = context;

  const addIngredient = (ingredient) => {
    const newIngredient = createIngredient(ingredient);
    dispatch({ type: 'CREATE', payload: newIngredient });
  };

  return { ingredients, addIngredient };
};
