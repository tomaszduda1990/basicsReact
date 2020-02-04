import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <Person age={13}/>
      <Person age={25}/>
      <Person age={63}/>
      <Person age={41}/>
    </div>
  );
}

export default App;
