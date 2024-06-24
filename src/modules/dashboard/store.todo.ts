
import { create as createZustand } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


interface Todo {
    id: string;
    todo: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
    addTodo: (todo: string) => void;
};

export const todoStore = createZustand<TodoState>()(
    persist((
        (set) => ({
            todos: [],
            addTodo: (data) => set((state) => ({
                todos: [...state.todos, {
                    id: Date.now().toString(),
                    todo: data,
                    completed: false
                }]
            })),
            deleteTodo: (id: Partial<Todo>) => set((state) => ({
                todos: state.todos.filter((todo: Todo) => todo.id != id)

            }))

        })), {
        name: 'todoStore',
        storage: createJSONStorage(() => sessionStorage),
    })
)