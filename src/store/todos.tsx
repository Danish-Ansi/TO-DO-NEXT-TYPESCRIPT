"use client"

import { useContext, createContext, ReactNode, useState } from "react";

type Todo = {
    id:string;
    task:string;
    completed:Boolean;
    createdAt: Date;
}
export type TodosContext = {
    todos:Todo[];
    handleAddTodo : (task:string) => void;
    toggleTodoAsCompleted : (id:string) => void;
    handleDeleteTodo : (id:string) => void;
}
export const todosContext = createContext<TodosContext | null>(null)

export const TodosProvider = ({children}: {children:ReactNode}) => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const newTodos = localStorage.getItem("todos") || "[]";
        return JSON.parse(newTodos) as Todo[];
    });

    const handleAddTodo = (task: string) => {
        setTodos((prev: Todo[]) => {
            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task,
                    completed:false,
                    createdAt: new Date()

                },
                ...prev,
            ]
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        })
    }


    // toggleTodoAsCompleted
    const toggleTodoAsCompleted = (id: string) => {
        // function toggleTodoAsCompleted(id:string) {
        setTodos((prev) => {
            // console.log("completed "+ prev.map((val) => val ))
            const newTodos = prev.map((task) => {
                if (task.id === id) {
                    return {...task, completed: !task.completed}
                }
                return task;
            })
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos
        })
    }

    // handleDeleteTodo
    function handleDeleteTodo(id: string) {
        setTodos((prev) => {
            const newTodos = prev.filter((task) => task.id !== id)
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos
        });

    }


    return (
        <todosContext.Provider value={{todos, handleAddTodo, toggleTodoAsCompleted, handleDeleteTodo }}>
            {children}
        </todosContext.Provider>
    );
}


export function useTodos() {
    const todosContextValue = useContext(todosContext)
    if(!todosContextValue){
        throw new Error("use Todos outside of Provider")
    }
    return todosContextValue;
}