import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [predictedData, setPredictedData] = useState(null)

  const predictAge = () => {
    fetch(`https://api.agify.io/?name=${name}`)
    .then((res) => res.json())
    .then((data) => {
      console.log('data: ', data)
      setPredictedData(data)
    })
  }

  return (
    <div className="App">
      <input
        placeholder='Enter your name here..'
        onChange={(event) => setName(event.target.value)}
      />

      <button
        onClick={predictAge}
      >
        Predict Age
      </button>

      <h2>Name: {predictedData?.name}</h2>
      <h2>Age: {predictedData?.age}</h2>
      <h2>Count: {predictedData?.count}</h2>
    </div>
  );
}

export default App;
