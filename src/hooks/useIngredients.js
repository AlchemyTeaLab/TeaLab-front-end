import { useContext, useState } from 'react';
import { teaContext } from '../context/TeaProvider';
import {
  createIngredient,
  getIngredients,
  removeIngredientById,
  updateIngredientById,
} from '../services/ingredientService';

export const useIngredients = () => {
  const context = useContext(teaContext);
  if (context === undefined) {
    throw new Error('useIngredients must be used within TeaProvider');
  }

  const { ingredients, ingredientDispatch } = context;
  const [ingredient, setIngredient] = useState(null);

  const addIngredient = async (ingredient) => {
    const newIngredient = await createIngredient(ingredient);
    ingredientDispatch({ type: 'CREATE', payload: newIngredient });
  };

  const updateIngredient = async (ingredient) => {
    if (!ingredient) return;

    try {
      const updated = await updateIngredientById({ ...ingredient });
      const payload = { ...updated };

      setIngredient(payload);
      ingredientDispatch({ type: 'UPDATE', payload });
      return payload;
    } catch (error) {
      console.error(error);
    }
  };

  const removeIngredient = async () => {
    if (!ingredient) return;

    try {
      const payload = await removeIngredientById(ingredient.id);
      setIngredient(null);
      if (ingredients) ingredientDispatch({ type: 'DELETE', payload });
      return payload;
    } catch (error) {
      console.error(error);
    }
  };

  const getListIngredients = async () => {
    try {
      const payload = await getIngredients();

      ingredientDispatch({ type: 'LOAD', payload });
      
      return payload;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    ingredients,
    addIngredient,
    updateIngredient,
    removeIngredient,
    getListIngredients
  };
};
