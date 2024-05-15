import React, { useState } from 'react';
import './App.css';
import Template from './Components/Template';
import TodoList from './Components/TodoList';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from './Components/TodoInsert';

let nextId = 4;

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "sigoto 1",
      checked: true
    },
    {
      id: 2,
      text: "sigoto 2",
      checked: false
    },
    {
      id: 3,
      text: "sigoto 3",
      checked: true
    }
  ]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = text =>{
    if (text === "") {
      return alert("할 일 입력 ");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = id => {
    setTodos(todos => 
      todos.map(todo => 
        todo.id === id ? {...todo, checked: !todo.checked} : todo
      )
    );
  };

  const onChangeSelectedTodo = todo=> {
    setSelectedTodo(todo);
  };

  const onRemove = id =>{
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos =>
      todos.map(todo => (todo.id === id ? { ...todo, text } : todo))
    );
  };



  return (
    <Template todoLength={todos.length}> 
      <TodoList 
      todos={todos} 
      onCheckToggle={onCheckToggle} 
      onInsertToggle={onInsertToggle}
      onChangeSelectedTodo={onChangeSelectedTodo} 
      />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>

      {insertToggle && (
        <TodoInsert 
          SelectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle} 
          onInsertTodo={onInsertTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )}
    </Template>
  );
};

export default App;









// function App() {
//   return (
//     <main></main>



//     // <div className="App">



//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div> */}

    
//   );
// }

