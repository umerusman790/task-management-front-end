const defaultObj = {
  tasks: [],
  error: null,
};

export const getAllTasksReducer = (state = defaultObj, action) => {
  switch (action.type) {
    case 'GETALL_TASK':
      return { ...state, ...action.payload };
    case 'DELETE_TASK':
      return { ...state, ...action.payload };
    case 'UPDATE_TASK':
      return { ...state, ...action.payload };
    case 'FILTER_TASKS':
      return { ...state, ...action.payload };
    case 'CREATE_TASK':
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
