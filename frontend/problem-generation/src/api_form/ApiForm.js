import React, { useState } from 'react';
import Selector from './Selector/Selector';
import './ApiForm.css';

function ApiForm() {
  const [numberValue, setNumberValue] = useState('');
  const [stringValue, setStringValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonOutput, setButtonOutput] = useState('hard');
  

  const handleButtonClick = (output) => {
    setButtonOutput(output);
  }

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
      difficulty: buttonOutput
    };

    const formattedString = data.string.replace(/ /g, '-');

    const apiUrl = `http://127.0.0.1:5000/download?n-problems=${data.number}&topic=${formattedString}&difficulty=${buttonOutput}`;

    console.log(apiUrl);
    setLoading(true);
    fetch(apiUrl)
      .then((response) => {
        setLoading(false);
        return response.blob();
      })
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
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
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
        <Selector onClick={handleButtonClick} />
        <br />
        <div>
          <button type="submit">Submit</button>
          {loading && (
            <div
              className="spinner"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          )}
        </div>
      </form>
    </div>

  );
}

export default ApiForm;
