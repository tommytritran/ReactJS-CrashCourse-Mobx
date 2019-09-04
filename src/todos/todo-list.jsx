import React, { useEffect, useContext } from "react";
import { todoContext } from "./todo-context";
import { useObserver } from "mobx-react-lite";


export default function TodoList() {

    const todoStore = useContext(todoContext);

    useEffect(() => {
        onLoadTodos();
    }, [])

    const onLoadTodos = async () => {
        await todoStore.getTodos();
    }

    return useObserver(() => <>
    <h1>Todo List</h1>
    <ul>
       { todoStore.todos.map(t => <li key={t.id}>{t.title}</li>)}
    </ul>
    
</>)
}