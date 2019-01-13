import axios from 'axios';
import { FETCH_USER , FETCH_COURSES } from './types';

export const fetchUser =  () => async dispatch => {
    const res = await axios.get('/api/current_user');
    return dispatch({ type:FETCH_USER,payload:res.data });
}

export const fetchCourses = () => async dispatch => {
  const res = await axios.get('/api/courses');
  return dispatch({ type:FETCH_COURSES,payload:res.data });
}
