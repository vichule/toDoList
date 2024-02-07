import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "../features/users/usersSlice";
import { userListSlice } from "../features/userlist/userlistSlice";
import { userProjectsSlice } from "../features/userprojects/userProjectsSlice";


export const store = configureStore({

    reducer: {
        'users': usersSlice.reducer,
        'todolist': userListSlice.reducer,
        'projectlist': userProjectsSlice.reducer
    }
})