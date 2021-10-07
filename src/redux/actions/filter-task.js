import { axio } from '../../apis/axios-config';

export const filterTasks = (search = '', status = '') => {
  return async (dispatch) => {
    try {
      const response = await axio.get(`/tasks?search=${search}&status=${status}`);

      dispatch({
        type: 'FILTER_TASKS',
        payload: {
          tasks: response.data,
        },
      });
    } catch (err) {
      dispatch({
        type: 'FILTER_TASKS',
        payload: {
          error: err.response.data,
        },
      });
    }
  };
};
