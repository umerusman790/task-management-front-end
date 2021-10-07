////////////////////Action Creators //////////////////////////////////////////////////////////////////

import { axio } from '../../apis/axios-config';

//////////////// sign in user //////////////////////////////////////////////////////////////////

export const signInUser = (username, password) => {
  return async (dispatch) => {
    let response = null;
    try {
      response = await axio.post('/auth/signin', {
        username: username,
        password: password,
      });

      localStorage.setItem('token', response.data.accessToken);

      dispatch({
        type: 'SIGNIN_USER',
        payload: {
          token: response.data.accessToken,
          error: null,
        },
      });
    } catch (err) {
      if (err.response.data.statusCode === 404 || err.response.data.statusCode === 401) {
        dispatch({
          type: 'SIGNIN_USER',
          payload: {
            token: null,
            error: 'email/password not correct',
          },
        });
      }
    }
  };
};

//////////// sign Up User //////////////////
