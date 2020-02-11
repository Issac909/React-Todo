import React from 'react';

const Item = props => {
    console.log(props);
    return (
        <div
            className = {`item${props.item.complete ? ' complete' : ''}`}
            onClick = {() => props.toggleItem(props.item.id)}
        >
            <p key = {props.key}>
            {props.item.toDoList}
            </p>
        </div>
    )
} 

export default Item;