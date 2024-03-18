import './style.css'
import { useSelector } from "react-redux";
import { RootState } from "../store/app/store";
import { useAppDispatch } from '../store/app/hook';
import { deleteTodo } from '../store/features/todo/todoSlice';

const DisplayTodo = () => {
    const todos = useSelector((state: RootState) => state.todo.todos);
    const dispatch = useAppDispatch();

    const handleDeleteTodo = (id: number) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className="main">
            <div className="container">
                {todos.length === 0 ? (
                    <h1 style={{ textAlign: "center", width:"100%" }}>No todos to display</h1>
                ) : (
                    <ul>
                        {todos.map((todo) => (
                            <li key={todo.id}>
                                <p>{todo.description}</p>
                                <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DisplayTodo;
