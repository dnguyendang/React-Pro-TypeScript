import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

const TodoList = () => {

    const addNewTodo = (todo: ITodo) => {
        setListTodo([...listTodo, todo]);
    }

    const [listTodo, setListTodo] = useState<ITodo[]>([])

    const deleteTodo = (id: number) => {
        const newList = listTodo.filter(item => item.id !== id);
        setListTodo(newList)
    }

    return (
        <div style={{
            width: "600px",
            margin: "50px auto",
            border: "1px solid #ccc",
            borderRadius: 10,
            padding: 10
        }}>
            <div
                style={{
                    padding: "10px 0",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc",
                    borderBottomStyle: "solid"
                }}
            >My todo list:</div>
            <br />
            <TodoInput
                addNewTodo={addNewTodo}
            />
            <TodoData
                todos={listTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}



export default TodoList;