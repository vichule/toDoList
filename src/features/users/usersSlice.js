import { createSlice } from "@reduxjs/toolkit";



export const usersSlice = createSlice({
    name: 'users',
    initialState:{
        data: [],
        status: 'idle',
        error: null
    },
    reducers:{
        addUser(state,action){
            state.data.push(action.payload)
        },
        deleteUser(state,action){
            state.data = state.data.filter((user) => user.username != action.payload.username)
        }
    }


})

export const { addUser, deleteUser } = usersSlice.actions
export const getUser = (state) => state.users.data