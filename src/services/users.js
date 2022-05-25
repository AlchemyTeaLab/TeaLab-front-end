export const signIn = ({ email, password }) => {
  // fetch post
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ email, password })
    });
    return res.json();

  } catch (error) {
    throw new Error('Invalid credentials');
  }
};

export const signUp = ({ email, password, username }) => {
  // fetch post
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ username, email, password })
    });
    return res.json();
    
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};

export const signOut = () => {
  // fetch delete
  const res = await fetch(`${process.env.API_URL}/api/v1/users`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors'
  });

  return res.ok;
};
