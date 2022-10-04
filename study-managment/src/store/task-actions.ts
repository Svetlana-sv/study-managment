import taskSlice from './task-slice';
import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { TaskModel } from '../models/redux-models';
import TaskService from '../service/taskService';

// * Здесь возникает побочный эффект — вызов http
// * Thunks - функция, которая откладывает действие на потом

export const taskActions = taskSlice.actions;

export const fetchTasks = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    if (getState().task.tasks.length === 0) {
      const response: TaskModel[] = await TaskService.getAllTasks();
      dispatch(taskActions.setTasks(response));
    }
  };
};
// export const fetchParticularTodo=(todo_id:number):ThunkAction<void,RootState,unknown,AnyAction>=>{
//     return async(dispatch,getState)=>{
//         const response:TaskModel=await TodoService.getParticularTodo(todo_id);
//         dispatch(todoActions.setParticularTodo(response))
// }
// }
