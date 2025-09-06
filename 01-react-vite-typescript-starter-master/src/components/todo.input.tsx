import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

interface IProps {
    name?: string;
    addNewTodo: (value: ITodo) => void;
}

const TodoInput = (props: IProps) => {

    const { addNewTodo } = props;
    //string
    const [todo, setTodo] = useState<string>("")

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }

    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        if (!todo) {
            alert("empty todo")
            return;
        }
        addNewTodo({
            id: randomInteger(1, 1000000),
            title: todo,
            isComplete: false,
        })
        setTodo("")
    }

    return (
        <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
            <input
                type="text"
                value={todo}
                onChange={handleTextChange}
            />
            <button onClick={handleClick}>Add todo</button>
        </div>
    )

}

export default TodoInput;