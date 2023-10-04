import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', task: 'Code', detail: 'code crude app' },
    { id: '2', task: 'Code 1', detail: 'code cat app' }
];

const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTask: (state, action) =>{
        state.push(action.payload);
        console.log(action)
        }
    }
})
export const {addTask} = todoSlice.actions
export default todoSlice.reducer