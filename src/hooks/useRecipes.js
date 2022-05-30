import { useContext, useState } from 'react';
import { teaContext } from '../context/TeaProvider';

import {
  createRecipe,
  getRecipesById,
  removeRecipeById,
  updateRecipeById,
} from '../services/recipeService';

export const useRecipes = () => {
  const context = useContext(teaContext);
  if (context === undefined) {
    throw new Error('useRecipes must be used within TeaProvider');
  }

  const { recipes, recipeDispatch } = context;

  const [recipe, setRecipe] = useState(null);

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

  const getUserRecipes = async (id) => {
    try {
      const recipes = await getRecipesById(id);
      recipeDispatch({ type: 'UPDATE', payload: recipes });
      return recipes;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    recipes,
    addRecipe,
    updateRecipe,
    removeRecipe,
    getUserRecipes,
  };
};
