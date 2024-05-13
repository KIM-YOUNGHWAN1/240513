import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Template from './Components/Template';
import TodoList from './Components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "sigoto 1",
      checked: true
    },
    {
      id: 2,
      text: "sigoto 2",
      checked: true
    },
    {
      id: 3,
      text: "sigoto 3",
      checked: true
    },


  ])
  return <Template> 
    <TodoList />
  </Template>
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

