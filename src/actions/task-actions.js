export const ADD_TASK = "tasks:addTask";

export function addTask(newTask) {
  return {
    type: ADD_TASK,
    payload: {
      task: {
        day: newTask.day,
        hour: newTask.hour,
        title: newTask.title,
        description: newTask.description,
        priority: newTask.priority
      }
    }
  };
}
