import React from 'react';

import './App.css';
import User from "./components/User/User";
import NewUser from "./components/NewUser/NewUser";
import Counter from "./components/Counter/Counter";



function App() {
  return (
    <div className="App">
      <User/>
      
      <NewUser/>
      <Counter/>
    </div>
  );
}

export default App;
