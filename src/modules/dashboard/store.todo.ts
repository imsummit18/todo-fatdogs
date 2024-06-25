
import { create as createZustand } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface Todo {
    id?: string;
    todo?: string;
    completed?: boolean;
}

export interface TodoState {
    todos: Todo[];
    editData: any;
    setEditData: (data: Todo) => void;
    addTodo: (todo: string) => void;
    deleteTodo: (id: Partial<Todo>) => void;
    updateTodo: (data: Todo, id: string) => void;
    loading: boolean;
};

export const todoStore = createZustand<TodoState>()(
    persist((
        (set) => ({
            todos: [],
            loading: false,
            editData: [],
            addTodo: (data) => {
                set(state => ({ ...state, loading: true }));
                setTimeout(() => {
                    set((state) => ({
                        todos: [...state.todos, {
                            id: Date.now().toString(),
                            todo: data,
                            completed: false
                        }],
                        loading: false
                    }));
                }, 1000);
            },
            updateTodo: (data: Todo, id: string) => set((state) => {
                return (
                    {
                        todos: state.todos.map((todo: Todo) => todo.id === id ? data : todo)
                    }
                )
            }),
            deleteTodo: (id: Partial<Todo>) => set((state) => ({
                todos: state.todos.filter((todo: Todo) => todo.id != id)
            })),
            setEditData: (data) => set((state) => ({ ...state, editData: data })),

        })), {
        name: 'todoStore',
        storage: createJSONStorage(() => sessionStorage),
    })
)