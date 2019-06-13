export const ADD_NEWTASK = "newTask:addNewTask";

export function addNewTask(newTask) {
  return {
    type: ADD_NEWTASK,
    payload: {
      newTask: {
        day: newTask.day,
        hour: newTask.hour,
        title: newTask.title,
        description: newTask.description,
        priority: newTask.priority
      }
    }
  };
}