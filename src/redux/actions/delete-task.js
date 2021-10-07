import { axio } from '../../apis/axios-config';

export const deleteTask = (id) => {
  return async (dispatch) => {
    try {
      const tasks = await axio.delete(`/tasks/${id}`);

      dispatch({
        type: 'DELETE_TASK',
        payload: {
          tasks: tasks.data,
        },
      });
    } catch (err) {
      dispatch({
        type: 'DELETE_TASK',
        payload: {
          error: JSON.stringify(err.response),
        },
      });
    }
  };
};
