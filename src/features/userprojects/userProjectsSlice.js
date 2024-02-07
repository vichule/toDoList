import { createSlice } from "@reduxjs/toolkit";

export const userProjectsSlice = createSlice({

    name: 'projectlist',
    initialState:{
        data: JSON.parse(localStorage.getItem('projectListItem')) || [],
        projects: JSON.parse(localStorage.getItem('projectList')) || [],
        status: 'idle',
        error: null
    },
    reducers:{
        addNote(state,action){
            state.data.push(action.payload)
            localStorage.setItem('projectListItem', JSON.stringify(state.data))
        },
        removeNote(state,action){
            state.data = state.data.filter((todo) => todo.id != action.payload.id)
            localStorage.setItem('projectListItem', JSON.stringify(state.data))
        },
        editProjectNote(state,action){
            const newNotes = [...state.data]
            const noteId = newNotes.findIndex((note) => note.id === action.payload.id)
            const newNote = {...newNotes[noteId], text: action.payload.newText}
            newNotes[noteId] = newNote
            state.data = newNotes
            localStorage.setItem('projectListItem', JSON.stringify(state.data))
        },
        addProject(state,action){
            state.projects.push(action.payload)
            localStorage.setItem('projectList', JSON.stringify(state.projects))
        },
        removeProject(state,action){
            state.projects = state.projects.filter((project) => project.id != action.payload.id)
            localStorage.setItem('projectList', JSON.stringify(state.projects))
        },
        editTitle(state,action){
            const newProjects = [...state.projects]
            const projectId = newProjects.findIndex((project) => project.id === action.payload.id)
            const newProject = {...newProjects[projectId], text: action.payload.newTitle}
            newProjects[projectId] = newProject
            state.projects = newProjects
            localStorage.setItem('projectList', JSON.stringify(state.projects))
        }
    }
})

export const { addNote, removeNote, editProjectNote, addProject, removeProject, editTitle } = userProjectsSlice.actions
export const getProjectList = (state) => state.projectlist.data
export const getProjects = (state) => state.projectlist.projects