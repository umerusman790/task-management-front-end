import { axio } from '../../apis/axios-config';

export const updateTask = (id, status) => {
  return async (dispatch) => {
    try {
      const tasks = await axio.patch(`/tasks/${id}`, {
        status,
      });

      dispatch({
        type: 'UPDATE_TASK',
        payload: {
          tasks: tasks.data,
        },
      });
    } catch (err) {
      dispatch({
        type: 'UPDATE_TASK',
        payload: {
          error: JSON.stringify(err.response),
        },
      });
    }
  };
};
