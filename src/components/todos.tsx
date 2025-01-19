"use client"

import { useTodos } from "@/store/todos";
import { useSearchParams } from "next/navigation";


const Todos = () => {
    
    const {todos, toggleTodoAsCompleted, handleDeleteTodo} = useTodos()

    const searchParams = useSearchParams();
    const todosFilter = searchParams.get('todos');

    let filterTodos = todos

    if (todosFilter === "active") {
        filterTodos = todos.filter((todo) => !todo.completed);
    } else if (todosFilter === "completed") {
        filterTodos = todos.filter((todo) => todo.completed);
    }

    return(
        <ul className="w-96 bg-neutral-800 m-5">
            {
                filterTodos.map((todo) => {
                    return <li className="p-2 border-2 border-black border-solid" key={todo.id}>
                        <input type="checkbox" className="m-2" name="" id={`todo-${todo.id}`} checked={todo.completed} onChange={() => toggleTodoAsCompleted(todo.id)}/>

                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                        {
                            todo.completed && (
                                <button className="float-end bg-black  h-7 w-20" type="button" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                            )
                        }
                    </li>
                })
            }
        </ul>
    );
};

export default Todos;