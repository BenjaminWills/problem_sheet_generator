import React, { useState } from 'react';
import Navbar from './navbar/Navbar'

function App() {
  const [numberValue, setNumberValue] = useState('');
  const [stringValue, setStringValue] = useState('');

  const handleNumberChange = (event) => {
    setNumberValue(event.target.value);
  }

  const handleStringChange = (event) => {
    setStringValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      number: numberValue,
      string: stringValue
    };

    const api_url = `http://127.0.0.1:5000/download?=n-problems=${data.number}&topic=${data.string}`

    console.log(api_url)

    fetch(api_url)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'problems.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      })
      .catch(error => console.error(error));
  }

  return (
    <div>
      <Navbar></Navbar>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a number:
          <input type="number" value={numberValue} onChange={handleNumberChange} />
        </label>
        <br />
        <label>
          Enter a string:
          <input type="text" value={stringValue} onChange={handleStringChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
