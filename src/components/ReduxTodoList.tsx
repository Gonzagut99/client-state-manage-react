import {useDispatch, useSelector} from 'react-redux'
import { AppDispatch, RootState } from '../utils/redux/reduxStore'
import { addTodo, removeTodo } from '../utils/redux/todoActions'
import { useInputTodo } from '../utils/useInputSchema'
import { emojiMap } from '../data/emojiMap'

export const ReduxTodoList = () => {
    const {todoTitle, setTodoTitle} = useInputTodo()
    const dispatch: AppDispatch = useDispatch() // Se debe tipar el dispatch
    const todos = useSelector((state: RootState) => state.todos) //Trae el estado que necesitamos

    const handleAddTodo = () => {
        const mappedText = emojiMap[todoTitle.toLowerCase()] || todoTitle
        if (mappedText.trim()) {
            dispatch(addTodo(mappedText))
            setTodoTitle('')
        }
    }

    const handleRemoveTodo = (id: number) => {
        dispatch(removeTodo(id))
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAddTodo()
        }
    }

  return (
    <div>
        <em>Made with Redux Toolkit</em>
        <h1>Emoji Todo List</h1>
        <input type="text"
            value={todoTitle}
            onChange={e => setTodoTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a todo..."
        />

        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id}
                    onClick={() => handleRemoveTodo(todo.id)}
                    >
                        {todo.title}
                        {/* <button >Remove</button> */}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
