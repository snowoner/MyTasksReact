import { ADD_TASK } from '../actions/task-actions';


export default function taskReducer(state=[], {type, payload}) {
  switch(type) {
    case ADD_TASK:
      return [...state,payload.task];
    default:
      return state;
  }
}

