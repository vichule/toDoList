import { createSlice } from "@reduxjs/toolkit";



export const usersSlice = createSlice({
    name: 'users',
    initialState:{
        data: [],
        usernameLog: null,
        status: 'idle',
        error: null
    },
    reducers:{
        addUser(state,action){
            state.data.push(action.payload)
        },
        deleteUser(state,action){
            state.data = state.data.filter((user) => user.id != action.payload.id)
        },
        changeUsername(state,action){
            state.usernameLog = action.payload.usernameLog
        }
    }


})

export const { addUser, deleteUser, changeUsername } = usersSlice.actions
export const getUser = (state) => state.users.data
export const getUsername = (state) => state.users.usernameLog