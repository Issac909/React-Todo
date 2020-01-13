// your components will all go in this `component` directory.
import React from 'react';
import Item from './Todo';

// feel free to change this component.js into TodoList.js

const ToDoList = props => {
    return ( 
        <div className = 'todo'>
            {props.toDo.map(item => (
                <Item key = {item.id} item = {item} markComplete = {props.markComplete} />
            ))}
            <button className = 'clear' onClick = {props.clearList} >
                Clear List
            </button>
        </div>
    )
}

export default ToDoList;
