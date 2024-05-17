import React, {useState} from "react";
import "./App.css";
import Template from "./Components/Template";
import TodoList from "./Components/TodoList";
import {MdAddCircle} from "react-icons/md";
import TodoInsert from "./Components/TodoInsert";
import {Header} from "./Components/Header/Header";

import Footer from "./Components/Footer/Footer";
// import Navbar from "./Components/Navbar/Navbar";

// import React, { useState } from 'react';
// 함수를 사용할 경우에 usesate Hook을 사용해서 변수 선언 가능
// 기존에 사용하던 클래스 컴포넌트의 this.state와 동일하다.

////////////////////////////////////////////////////////////////////////////
//
//
//
//
//
////////////////////////////////////////////////////////////////////////////

let nextId = 4;

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리스트를 만들어 주세요.",
      checked: false,
    },
    // {
    //   id: 2,
    //   text: "sigoto 1",
    //   checked: true,
    // },
  ]);

  ////////////////////////////////////////////////////////////////////////////
  //
  //
  //
  //
  //
  ////////////////////////////////////////////////////////////////////////////

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert(" 할 일 입력 app.js에 위치.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo
      )
    );
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? {...todo, text} : todo))
    );
  };

  ////////////////////////////////////////////////////////////////////////////
  //
  //
  //
  //
  //
  ////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Header />
      {/* <Navbar /> */}

      <Template
        todoLength={todos.length}
        clickedTodoCount={todos.clickedTodoCount}
      >
        <div className="add-todo-button" onClick={onInsertToggle}>
          <MdAddCircle /> 생성하기
        </div>
        <TodoList
          todos={todos}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
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
      <Footer />
    </>
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
