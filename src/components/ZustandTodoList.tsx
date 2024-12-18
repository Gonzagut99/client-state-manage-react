import { emojiMap } from "../data/emojiMap"
import { useInputTodo } from "../utils/useInputSchema"
import { useTodoStore } from "../utils/zustand/zustandStore"

export const ZustandTodoList: React.FC = () => {
    const {setTodoTitle, todoTitle} = useInputTodo()
    const {addTodo, removeTodo, todos}  =  useTodoStore(state => state)

    const handleAddTodo = () => {
        const mappedText = emojiMap[todoTitle.toLowerCase()] || todoTitle
        if(mappedText.trim()){
            addTodo(mappedText)
            setTodoTitle('')
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            handleAddTodo()
        }
    }

  return (
    <div>
        <em>Made with Zustand</em>
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
                    onClick={() => removeTodo(todo.id)}
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
