import { createSlice } from "@reduxjs/toolkit";


export const userListSlice = createSlice({

    name: 'todolist',
    initialState:{
        data: JSON.parse(localStorage.getItem('userList')) || [],
        status: 'idle',
        error: null
    },
    reducers:{
        addToDo(state,action){
            state.data.push(action.payload)
            localStorage.setItem('userList', JSON.stringify(state.data))
        },
        removeToDo(state,action){
            state.data = state.data.filter((todo) => todo.id != action.payload.id)
            localStorage.setItem('userList', JSON.stringify(state.data))
        }
    }
})

export const { addToDo, removeToDo } = userListSlice.actions
export const getToDoList = (state) => state.todolist.data