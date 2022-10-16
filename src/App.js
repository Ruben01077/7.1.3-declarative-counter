import './App.css';
import React, { useState } from 'react'

function App(){
    let [ counter, changeCounter ] = useState(<h1>Hello From React </h1>)
    window.changeCounter = changeCounter
    return (
      <div>       
      <h1>{counter}</h1>
      <h2>{counter}</h2>
      <h4>{counter}</h4>
      </div>
 
    )
}

export default App;
