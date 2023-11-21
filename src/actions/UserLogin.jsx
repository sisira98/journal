export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});
export const userLogin = (name, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:8080/journal/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.token;
        localStorage.setItem('accessToken', accessToken);
        dispatch(loginSuccess(accessToken));
        console.log('Login successful');
      } else {
        console.error('Error logging in:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
};
