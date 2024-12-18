import { useState } from "react"

export const useInputTodo = ()=>{
    const [todoTitle, setTodoTitle] = useState('')
    return{
        todoTitle,
        setTodoTitle
    }
}