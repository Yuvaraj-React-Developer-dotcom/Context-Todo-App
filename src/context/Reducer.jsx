import { actionTypes } from "../constant/actions";
export const initialState = {
  todoList: [],
  pendingState: 0,
  progressState: 0,
  completedState: 0,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODOADD:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
        pendingState: state.pendingState + 1,
      };
    case actionTypes.TODOUPDATE:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          (state.todoList[action.payload.index].stage = action.payload.key),
        ],
        progressState: state.progressState + 1,
        pendingState: state.pendingState - 1,
      };
    case actionTypes.TODOUPDATEFINAL:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          (state.todoList[action.payload.index].stage = action.payload.key),
        ],
        completedState: state.completedState + 1,
        progressState: state.progressState - 1,
      };
    case actionTypes.TODOUPDATEFIRST:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          (state.todoList[action.payload.index].stage = action.payload.key),
        ],
        pendingState: state.pendingState + 1,
        completedState: state.completedState - 1,
      };

    case actionTypes.TODOREMOVE:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          delete state.todoList[action.payload.index],
        ],
      };
    case actionTypes.TODOREMOVEFIRST:
      console.log("test test one");
      return {
        ...state,
        pendingState: state.pendingState - 1,
      };
    case actionTypes.TODOREMOVESEC:
      console.log("test test sec");
      return {
        ...state,
        progressState: state.progressState - 1,
      };
    case actionTypes.TODOREMOVEFINAL:
      console.log("test test third");
      return {
        ...state,
        completedState: state.completedState - 1,
      };
    default:
      return state;
  }
};
