import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todoReducer";

export const store = configureStore({
    reducer: {
        // Define a top-level state field named `todos`, handled by `todosReducer`
        todos: todosReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;