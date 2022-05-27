import { useContext, useState } from 'react';
import { teaContext } from '../context/TeaProvider';
import { createIngredient, updateIngredientById } from '../services/ingredientService';


export const useTea = () => {
  const context = useContext(teaContext);
  if (context === undefined) {
    throw new Error('useTea must be used within TeaProvider');
  }

  const { ingredients, dispatch } = context;

  const [ingredient, setIngredient] = useState(null);

  const addIngredient = (ingredient) => {
    const newIngredient = createIngredient(ingredient);
    dispatch({ type: 'CREATE', payload: newIngredient });
  };

  const updateIngredient = async (ingredient) => {
    if (!ingredient) return;

    try {
      const updated = await updateIngredientById({ ...ingredient }); 
      const payload = { ...updated };

      setIngredient(payload);
      dispatch({ type: 'UPDATE', payload });
      return payload;
    } catch (error) {
      
    }
  }

  return { ingredients, addIngredient };
};
