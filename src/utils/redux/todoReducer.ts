import { createReducer } from "@reduxjs/toolkit";
import { Todo } from "../../types/todo";
import { addTodo, removeTodo } from "./todoActions";

type TodosState = Todo[]

const initialState:TodosState = []

export const todosReducer = createReducer(
    initialState,
    builder => {
        builder
            .addCase(addTodo, (state, action) => {
                state.push({ id: state.length, title: action.payload })
            })
            .addCase(removeTodo, (state, action) => {
                return state.filter(todo => todo.id !== action.payload)
            })
    }
)