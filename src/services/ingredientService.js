export async function createIngredient(ingredient) {
  const res = await fetch(`${process.env.API_URL}/api/v1/ingredients`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(ingredient),
  });

  return res.json();
}
