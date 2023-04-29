import React, { useState } from 'react';
import './ApiForm.css';

function ApiForm() {
  const [numberOfProblems, setProblemNumberValue] = useState('5');
  const [topicValue, setTopicValue] = useState('Addition');
  const [difficultyValue,setDifficultyValue] = useState('hard');
  const [loading, setLoading] = useState(false);
  

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
      numberOfProblems: numberOfProblems,
      topic: topicValue,
      difficulty: difficultyValue
    };

    const formattedTopic = data.topic.replace(/ /g, '-');
    const formattedDifficulty = data.difficulty.replace(/ /g, '-');

    const apiUrl = `http://127.0.0.1:5000/download?n-problems=${data.numberOfProblems}&topic=${formattedTopic}&difficulty=${formattedDifficulty}`;
    console.log(`difficulty: ${data.difficulty}`)
    console.log(`number of problems: ${data.numberOfProblems}`)
    console.log(`topic: ${data.topic}`)
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
