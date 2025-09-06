
interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner?: string;
    age?: number;
    isDeveloper?: boolean;
    deleteTodo: (v: number) => void;
}

const TodoData = (props: IProps) => {
    const { todos, deleteTodo } = props

    return (
        <div>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <div style={{ padding: "10px 0" }}>
                            {item.id} - {item.title}
                            &nbsp;<button onClick={() => deleteTodo(item.id)}>Delete</button>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;