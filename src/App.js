import React from 'react';

import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';

const toDo = [
  {
  toDoList: '',
  id: 101,
  complete: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      toDoList: toDo
    };
  }

  markComplete = id => {
    console.log('task completed');
    const updatedList = this.state.toDoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete
        }
      } else {
        return item;
      }
    });
    this.setState({
      toDoList: updatedList,
    });
  };

  addToDo = todo => {
    const newToDo = {
      toDoList: todo,
      id: Date.now(),
      complete: false
    };
    this.setState({
      toDoList: [...this.state.toDoList, newToDo]
    });
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className = 'App'>
        <div className = 'header'>
          <h2>Welcome to your Todo App!</h2>
          <ToDoForm addItem = {this.addToDo} />
        </div>
        <ToDoList
        toDo =  {this.state.toDoList}
        markComplete = {this.markComplete}
        />
      </div>
    );
  }
}

export default App;
