// todoSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: number;
    description: string;
}

interface InitialState {
    todos: Todo[];
}

const initialState: InitialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
