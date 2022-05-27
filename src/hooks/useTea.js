import { useContext, useState } from 'react';
import { teaContext } from '../context/TeaProvider';
import {
  createIngredient,
  removeIngredientById,
  updateIngredientById,
} from '../services/ingredientService';
import {
  createRecipe,
  removeRecipeById,
  updateRecipeById,
} from '../services/recipeService';

export const useTea = () => {
  const context = useContext(teaContext);
  if (context === undefined) {
    throw new Error('useTea must be used within TeaProvider');
  }

  const { ingredients, ingredientDispatch, recipes, recipeDispatch } = context;
  const [ingredient, setIngredient] = useState(null);
  const [recipe, setRecipe] = useState(null);

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
      throw new Error('update unsuccessful...');
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
      throw new Error('unable to delete ingredient');
    }
  };

  const addRecipe = async (recipe) => {
    const newRecipe = await createRecipe(recipe);
    recipeDispatch({ type: 'CREATE', payload: newRecipe });
  };

  const updateRecipe = async (recipe) => {
    if (!recipe) return;

    try {
      const updated = await updateRecipeById({ ...recipe });
      const payload = { ...updated };

      setRecipe(payload);
      recipeDispatch({ type: 'UPDATE', payload });
      return payload;
    } catch (error) {
      throw new Error('update unsuccessful...');
    }
  };

  const removeRecipe = async () => {
    if (!recipe) return;

    try {
      const payload = await removeRecipeById(recipe.id);
      setRecipe(null);
      if (recipes) recipeDispatch({ type: 'DELETE', payload });
      return payload;
    } catch (error) {
      throw new Error('unable to delete recipe');
    }
  };

  return {
    ingredients,
    addIngredient,
    updateIngredient,
    removeIngredient,
    recipes,
    addRecipe,
    updateRecipe,
    removeRecipe,
  };
};
