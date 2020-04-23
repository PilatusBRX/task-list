const TaskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };

    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    //toggle done
    case 'TOGGLE_DONE':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, done: !task.done } : task
        ),
      };

    case 'CLEAR_LIST':
      return {
        ...state,
        tasks: (action.payload = []),
      };

    default:
      return state;
  }
};
export default TaskReducer;
