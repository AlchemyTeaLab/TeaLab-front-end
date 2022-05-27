export async function createRecipe(recipe) {
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
  const res = await fetch(`${process.env.API_URL}/api/v1/recipes`, {
    method: 'PATCH',
    header: { 'content-type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(recipe),
  });
  return res.json();
}

export async function removeRecipeById(id) {
  const res = await fetch(`${process.env.API_URL}/api/v1/recipes`, {
    method: 'DELETE',
    header: { 'content-type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(recipe),
  });
  return res.json();
}
