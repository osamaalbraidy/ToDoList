import './style.css'
import { useState } from "react";
import { useAppDispatch } from "../store/app/hook";
import { addTodo } from "../store/features/todo/todoSlice";

const AddTodo = () => {
    const [todoDescription, setTodoDescription] = useState("");
    const dispatch = useAppDispatch();

    const handleAddTodo = () => {
        if (todoDescription.trim() !== "") {
            dispatch(addTodo({
                id: Date.now(),
                description: todoDescription,
            }));
            setTodoDescription("");
        }
    };

    return (
        <div>
            <h1>Enter Your TODO</h1>
            <input
                type="text"
                placeholder="Example: Creating ToDoList App etc..."
                value={todoDescription}
                onChange={(e) => setTodoDescription(e.target.value)}
            />
            <br/><br/>
            <button onClick={handleAddTodo}>Add ToDo</button>
        </div>
    );
};

export default AddTodo;
