import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 'Eample', task: 'Add Task', detail: 'Click on add task button and add task and its detail...' },

];

const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
        state.push(action.payload);
        console.log(action)
        },
        editTask: (state, action) => {
         const {id, task, detail} = action.payload;
         const ExitingTodo = state.find(todo=> todo.id === id)
         if(ExitingTodo){
            ExitingTodo.task = task;
            ExitingTodo.detail = detail;
         }
        },
        deleteTask: (state, action) => {
            const {id} = action.payload;
            const deleteTask = state.find(todo => todo.id === id);
            if(deleteTask){
              return  state.filter((todo) => todo.id !== id)
            }
        }
    }
})
export const {addTask, editTask, deleteTask} = todoSlice.actions
export default todoSlice.reducer