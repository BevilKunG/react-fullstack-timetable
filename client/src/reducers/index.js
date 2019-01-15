import { combineReducers } from 'redux';
import authReducer from './authReducer';
import coursesReducer from './coursesReducer';
import durationsReducer from './durationsReducer';

export default combineReducers({
  auth: authReducer,
  courses: coursesReducer,
  durations: durationsReducer
});
