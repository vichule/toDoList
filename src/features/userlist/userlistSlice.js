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
        },
        editNote(state,action){
            const newNotes = [...state.data]
            const noteId = newNotes.findIndex((note) => note.id === action.payload.id)
            const newNote = {...newNotes[noteId], text: action.payload.newText}
            newNotes[noteId] = newNote
            state.data = newNotes
            localStorage.setItem('userList', JSON.stringify(state.data))
        }
    }
})

export const { addToDo, removeToDo, editNote } = userListSlice.actions
export const getToDoList = (state) => state.todolist.data