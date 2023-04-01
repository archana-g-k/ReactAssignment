import { useState } from 'react';
import './App.css';
import Login from './Login';
import TodoList from './TodoList';

function App() {
  const[loginState,setLoginState]=useState(false);
  return (
    <div className="App">
      {! loginState && <Login updateState={setLoginState} x="1" />}
      {loginState && <TodoList/>}
    </div>
  );
}

export default App;
