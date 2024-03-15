import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../featcher/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})