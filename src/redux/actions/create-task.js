import { axio } from '../../apis/axios-config';

export const createTask = (title, description) => {
  return async (dispatch) => {
    try {
      const response = await axio.post('/tasks', {
        title: title,
        description: description,
      });

      dispatch({
        type: 'CREATE_TASK',
        payload: {
          tasks: response.data,
        },
      });
    } catch (err) {
      dispatch({
        type: 'CREATE_TASK',
        payload: {
          error: JSON.stringify(err.response.data.message),
        },
      });
    }
  };
};
