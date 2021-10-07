import { axio } from '../../apis/axios-config';

export const getAllTask = () => {
  return async (dispatch) => {
    try {
      const response = await axio.get('/tasks');

      dispatch({
        type: 'GETALL_TASK',
        payload: {
          tasks: response.data,
        },
      });
    } catch (err) {
      dispatch({
        type: 'GETALL_TASK',
        payload: {
          error: JSON.stringify(err.response.data.message),
        },
      });
    }
  };
};
