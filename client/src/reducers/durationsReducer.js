import { SET_DURATIONS } from '../actions/types';
export default (state=[],action) => {
  switch(action.type){
    case SET_DURATIONS :
      return action.payload;
    default:
      return state;
  }
}
