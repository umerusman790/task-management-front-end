///////////////////// Reducers ///////////////////////////

const defaultObj = {
  token: null,
  error: null,
};

export const signUserReducer = (state = defaultObj, action) => {
  switch (action.type) {
    case 'SIGNIN_USER':
      return { ...state, ...action.payload };
    case 'SIGNUP_USER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
