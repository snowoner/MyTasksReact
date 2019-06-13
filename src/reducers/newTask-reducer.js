import { ADD_NEWTASK } from '../actions/newTask-actions';


export default function newTaskReducer(state=[], {type, payload}) {
  switch(type) {
    case ADD_NEWTASK:
      return payload.newTask;
    default:
      return state;
  }
}