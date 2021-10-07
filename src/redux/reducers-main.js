////////////// COMBINE REDUCERS //////////////

import { combineReducers } from 'redux';

import { signUserReducer } from './reducers/signuser-reducer';
import { getAllTasksReducer } from './reducers/g-d-u-f-task-redcuer';

export default combineReducers({
  signToken: signUserReducer,
  tasks: getAllTasksReducer,
});
