export const signIn = async (email, password) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ email, password }),
    });

    const response = await res.json();
    return response;
  } catch (err) {
    //
    throw new Error('wrong!');
  }
};

export const signUp = async (email, password, username) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify({ email, password, username }),
    });

    const response = await res.json();
    return response;
  } catch (err) {
    //
    throw err;
  }
};

export const getCurrentUser = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/me`, {
      credentials: 'include',
    });
    return res.json();
  } catch (err) {
    //
    return null;
  }
};

export const signOut = async () => {
  // fetch delete
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/users/session`, {
      method: 'DELETE',
      credentials: 'include',
      mode: 'cors',
    });

    return res.ok;
  } catch (error) {
    //
    throw err;
  }
};
