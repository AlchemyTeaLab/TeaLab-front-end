export async function createRecipe({ recipe, ingredients }) {
  const res = await fetch(`${process.env.API_URL}/api/v1/recipes`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(recipe),
  });

  return res.json();
}

export async function updateRecipeById(recipe) {
  console.log('service recipe', recipe);
  const res = await fetch(
    `${process.env.API_URL}/api/v1/recipes/${recipe.id}`,
    {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify(recipe),
    }
  );

  return res.json();
}

export async function removeRecipeById(id) {
  console.log('id', id);
  const res = await fetch(`${process.env.API_URL}/api/v1/recipes/${id}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    // body: JSON.stringify(recipe),
  });

  return res.json();
}

export async function getRecipesById(id) {
  const res = await fetch(`${process.env.API_URL}/api/v1/recipes/users/${id}`, {
    headers: { 'content-type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
  });

  return res.json();
}
