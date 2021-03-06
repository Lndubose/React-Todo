import React from 'react';
import "./index.css";
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todos: [],
      inputText: '',
    }
  }


  changeInput = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  addTodo = event => {
    event.preventDefault();
    let copy = false;
    this.state.todos.forEach(todo => {
      if(todo.task === this.state.inputText) {
        alert(`Already have ${this.state.inputText} as a task.`)
        copy = true;
      }
    });
    if(copy === true) {
      
    } else {
      if(this.state.inputText) {
        this.setState({
          todos: [...this.state.todos, {
            task: this.state.inputText,
            id: Date.now(),
            completed: false,
          }],
          
        })
      }
    }
    this.setState({inputText: ''})
  };


  completed = id => {
    const todosArray = [...this.state.todos];
    for (let i = 0; i < todosArray.length; i++){
      if(id === todosArray[i].id) {
        todosArray[i].completed = !todosArray[i].completed;
      }
    }
    this.setState({todos: todosArray});
  };

  clearComplete = event => {
    event.preventDefault();
    const oldArray = [...this.state.todos];
    const newArray = [];

    oldArray.filter(todo => {
      if(todo.completed === false) {
        newArray.push(todo);
      }
      return newArray;
    })
    this.setState({todos: newArray})

  }

  render() {
    return (
      <div className="container todo">
        <h2>Welcome to your Todo App!</h2>
        <div className="inner-list">
        <TodoForm 
          inputText={this.state.inputText}
          changeInput={this.changeInput}
          addTodo={this.addTodo}
          clearComplete={this.clearComplete}

        />
        <TodoList 
          propTodos={this.state.todos} 
          completed={this.completed}
        />
        </div>
      </div>
    );
  }
}

export default App;
