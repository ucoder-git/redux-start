import { useSelector } from 'react-redux';
import TodoList from '../components/TodoList'
import React from 'react';


function TodoListContainer( ){

    const todos = useSelector((state)=> state.todos);

    return <TodoList todos={todos} />;
}
export default TodoListContainer;