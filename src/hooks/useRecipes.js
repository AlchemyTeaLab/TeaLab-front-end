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

  const addRecipe = async (recipe, ingredients) => {
    const newRecipe = await createRecipe({ recipe, ingredients });
    recipeDispatch({ type: 'CREATE', payload: newRecipe });
  };

  const updateRecipe = async (recipe) => {
    try {
      const updated = await updateRecipeById({ ...recipe });
      const payload = { ...updated };
      recipeDispatch({ type: 'UPDATE', payload });

      return payload;
    } catch (error) {
      console.error(error);
    }
  };

  const removeRecipe = async (id) => {
    try {
      const payload = await removeRecipeById(id);
      if (recipes) recipeDispatch({ type: 'DELETE', payload });

      return payload;
    } catch (error) {
      console.error(error);
    }
  };

  const getUserRecipes = async (id) => {
    try {
      const payload = await getRecipesById(id);
      recipeDispatch({ type: 'UPDATE', payload });

      return payload;
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
