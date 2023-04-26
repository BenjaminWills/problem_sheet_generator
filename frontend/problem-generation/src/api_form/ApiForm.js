import React, { useState } from 'react';
import './ApiForm.css';

function ApiForm() {
  const [numberValue, setNumberValue] = useState('');
  const [stringValue, setStringValue] = useState('');
  const [showDiv, setShowDiv] = useState(false);

  const handleSubmitPress = (event) => {
    setShowDiv(true);
  };

  const handleNumberChange = (event) => {
    setNumberValue(event.target.value);
  };

  const handleStringChange = (event) => {
    setStringValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      number: numberValue,
      string: stringValue,
    };

    const formatted_string = data.string.replace(/ /g, '-');

    const api_url = `http://127.0.0.1:5000/download?n-problems=${data.number}&topic=${formatted_string}`;

    console.log(api_url);

    fetch(api_url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'problems.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <label className="label-box">
          How many problems would you like to generate?
          <input type="number" value={numberValue} onChange={handleNumberChange} />
        </label>
        <br />
        <label className="label-box">
          What topic should the sheets cover?
          <input type="text" value={stringValue} onChange={handleStringChange} />
        </label>
        <br />
        <div>
          <button onClick={handleSubmitPress} type="submit">Submit</button>
          {showDiv && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
            >
              Loading...
            </div>
          )}
        </div>
      </form>
    </div>

  );
}

export default ApiForm;
