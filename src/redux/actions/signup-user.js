import { axio } from '../../apis/axios-config';

export const SignUpUser = (username, password) => {
  return async (dispatch) => {
    try {
      await axio.post('/auth/signup', {
        username: username,
        password: password,
      });

      dispatch({
        type: 'SIGNUP_USER',
        payload: {
          error: null,
        },
      });
    } catch (err) {
      dispatch({
        type: 'SIGNUP_USER',
        payload: {
          error: JSON.stringify(err.response.data.message),
        },
      });
    }
  };
};
