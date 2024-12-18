import { create } from "zustand";
import { Todo } from "../../types/todo"

type TodoStore = {
    todos: Todo[];
    addTodo: (title: string) => void;
    removeTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    addTodo: (title) => set((state) => ({
        todos: [...state.todos, { id: state.todos.length, title }]
    })),
    removeTodo: (id) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
    }))
}))