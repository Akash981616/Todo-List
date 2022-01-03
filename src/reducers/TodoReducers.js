const InitialState = {
  tasks: [],
};

export const TodoReducers = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      const { id, data } = action.payload;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE_TO_DO":
      const delet = state.tasks.filter((ele) => ele.id !== action.id);

      return {
        ...state,
        tasks: delet,
      };

    case "REMOVE_TO_DO":
      return {
        ...state,
        tasks: [],
      };

    default:
      return state;
  }
};
