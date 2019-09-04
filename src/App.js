import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { TodoProvider } from './todos/todo-context';
import Router from './Router';

function App() {
  useEffect(() => {
    console.log("Hello")
  })
  return (
    <TodoProvider>
      <BrowserRouter>
        <div className="App">
          <Router />
        </div>
      </BrowserRouter>
    </TodoProvider>

  );
}

export default App;
