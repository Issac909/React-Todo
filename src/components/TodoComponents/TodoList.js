// your components will all go in this `component` directory.
import React from 'react';
import Item from './Todo';

// feel free to change this component.js into TodoList.js

const ToDoList = props => {
    return ( 
        <div className = 'to-do-list'>
                {props.toDo.map(item => (
                    console.log(item),
                <Item key = {props.key} item = {item} toggleItem = {props.markComplete} toggleComplete = {props.crossOut} />
                ))}
            <button className = 'clear' onClick = {props.clearList} >
                Clear List
            </button>
        </div>
    )
}

export default ToDoList;
