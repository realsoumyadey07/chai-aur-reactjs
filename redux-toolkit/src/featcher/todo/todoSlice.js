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
                text: action.payload.text
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter(i=>i.id!==action.payload.id)
        },
        updateTodo: (state, action)=>{
            state.todos = state.todos.filter((i)=> i.id!==action.payload.id);
            const updatedTodo = {
                id: action.payload.id,
                text: action.payload.text
            }
            state.todos.push(updatedTodo);
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer