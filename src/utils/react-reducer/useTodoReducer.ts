// type Todo = {
//     id:number
//     title: string

import { useReducer } from "react"
import { Todo } from "../../types/todo"
import { emojiMap } from "../../data/emojiMap"
import { useInputTodo } from "../useInputSchema"

// }
type State = {
    todos: Todo[]
}

type Action = {
    type: 'ADD_TODO'
    payload: string
} | {
    type: 'REMOVE_TODO'
    payload: number
}

const initialState: State = {
    todos: []
}

const todoReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [...state.todos, { id: state.todos.length, title: action.payload }]
            }
        case 'REMOVE_TODO':
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state
    }
}

export const useTodoReducer = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    const {setTodoTitle:setTodoTitleInput, todoTitle:todoTitleInput} = useInputTodo()

    const handleAddTodo = () => {
        const mappedText = emojiMap[todoTitleInput.toLowerCase()] || todoTitleInput
        if(mappedText.trim()){
            dispatch({ type: 'ADD_TODO', payload: mappedText })
            setTodoTitleInput('')
        }
    }

    return {
        state,
        dispatch,
        todoTitleInput,
        setTodoTitleInput,
        handleAddTodo
    }
}