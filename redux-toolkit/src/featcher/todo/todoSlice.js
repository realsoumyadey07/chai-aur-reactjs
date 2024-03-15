import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Hello World"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter(i=>i.id!==action.payload)
        },
        updateTodo: (state, action)=>{
            state.todos = state.todos.filter((i)=> i.id!==action.payload);
            const updatedTodo = {
                id: action.payload,
                text: action.payload
            }
            state.todos.push(updatedTodo);
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer