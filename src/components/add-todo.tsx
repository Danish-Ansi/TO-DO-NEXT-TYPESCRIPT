"use client"

import { FormEvent, useState } from "react";
import {useTodos} from "@/store/todos";

const AddTodo = () => {
    const [todo, setTodo] = useState("")

    const {handleAddTodo} = useTodos();

    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("");
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" className="p-5 w-96 h-10 text-black" placeholder="Enter your todo" name="" value={todo} onChange={(event) => setTodo(event.target.value)}/>
            <button type="submit" className="bg-black h-10 w-28"> ADD </button>
        </form>
    )
}

export default AddTodo;