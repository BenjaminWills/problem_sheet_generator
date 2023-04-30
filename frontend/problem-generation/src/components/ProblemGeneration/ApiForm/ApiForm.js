import React, { useState } from 'react';
import './ApiForm.css';

function ApiForm() {
  const [numberOfProblems, setProblemNumberValue] = useState('5');
  const [topicValue, setTopicValue] = useState('Addition');
  const [difficultyValue, setDifficultyValue] = useState('hard');
  const [APIKey, setAPIKey] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAPIKey = (event) => {
    setAPIKey(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficultyValue(event.target.value);
  };

  const handleProblemNumberChange = (event) => {
    setProblemNumberValue(event.target.value);
  };

  const handleTopicChange = (event) => {
    setTopicValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      numberOfProblems,
      topic: topicValue,
      difficulty: difficultyValue,
      ApiKey: APIKey,
    };

    const formattedTopic = data.topic.replace(/ /g, '-');
    const formattedDifficulty = data.difficulty.replace(/ /g, '-');
    // Send the get request
    const apiUrl = `http://127.0.0.1:5001/download?n-problems=${data.numberOfProblems}&topic=${formattedTopic}&difficulty=${formattedDifficulty}&api-key=${data.ApiKey}`;
    console.log(`difficulty: ${data.difficulty}`);
    console.log(`number of problems: ${data.numberOfProblems}`);
    console.log(`topic: ${data.topic}`);
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

    // Update transactions database
    const transactionAPIURL = `http://127.0.0.1:5002/log-transaction?n-problems=${data.numberOfProblems}&topic=${formattedTopic}&difficulty=${formattedDifficulty}&api-key=${data.ApiKey}`
    fetch(transactionAPIURL)
      .catch((error) => console.log(error))
    // Cleanup zip files remaining in the directory
    const cleanupURL = 'http://127.0.0.1:5001/cleanup';
    fetch(cleanupURL)
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <label className="label-box">
          API key:
          <input type="number" value={APIKey} onChange={handleAPIKey} />
        </label>
        <br />
        <label className="label-box">
          How many problems would you like to generate?
          <input type="number" value={numberOfProblems} onChange={handleProblemNumberChange} />
        </label>
        <br />
        <label className="label-box">
          What topic should the sheets cover?
          <input type="text" value={topicValue} onChange={handleTopicChange} />
        </label>
        <br />
        <label className="label-box">
          How difficult would you like the sheet to be?
          <input type="text" value={difficultyValue} onChange={handleDifficultyChange} />
        </label>
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
