// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

function TodoList(props) {
return <div className="list">{props.propTodos.map(todo => 
    <Todo 
      todo={todo} 
      completed={props.completed} 
      key={todo.id}
    />)}
  </div>;
}

export default TodoList;
