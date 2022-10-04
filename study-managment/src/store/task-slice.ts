import { TaskModel, TaskArrayModel } from '../models/redux-models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialTaskState: TaskArrayModel = {
  tasks: [],
};

//* Создание taskSlice

const taskSlice = createSlice({
  // состояние
  name: 'task',

  // * Инциируем taskSlice с помощью initialState и редукторов

  initialState: initialTaskState,

  // * Редукторы - должны быть простыми функциями только для изменения состояния

  reducers: {
    // * Редукторы принимают в качестве аргументов состояние (которое является текущим состоянием хранилища
    // * и действие типа PayloadAction<type>

    setTasks(state, action: PayloadAction<TaskModel[]>) {
      state.tasks = action.payload;
    },
  },
});
export default taskSlice;
