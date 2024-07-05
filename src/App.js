import React from 'react';
import './App.css';
import DataDisplay from './components/DataDisplay';
import players from './players';

function App() {
  return (
    <div className="App">
      
      <DataDisplay players={players}/>
      
    </div>
  );
}

export default App;
