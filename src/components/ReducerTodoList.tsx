import { useTodoReducer } from "../utils/react-reducer/useTodoReducer"

export const TodoList: React.FC = () => {

    const {
        handleAddTodo, 
        todoTitleInput:todoTitle, 
        setTodoTitleInput:setTodoTitle,
        state,
        dispatch
    } = useTodoReducer()

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            handleAddTodo()
        }
    }
  return (
    <div>
        <em>Made with useReducer</em>
        <h1>Emoji Todo List</h1>
        <input type="text"
            value={todoTitle}
            onChange={e => setTodoTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a todo..."
        />

        <ul>
            {
                state.todos.map(todo => (
                    <li key={todo.id}
                    onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
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
