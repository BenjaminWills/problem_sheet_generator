import React, { useState } from 'react';
import './Selector.css';

function Selector() {
  const [selected, setSelected] = useState('');

  const handleSelection = (label) => {
    setSelected(label);
  };

  return (
    <div className="selector">
      <div className={`selector-circle ${selected === 'Easy' ? 'selected' : ''}`} onClick={() => handleSelection('Easy')}>
        <div className="circle-label">Easy</div>
      </div>
      <div className={`selector-circle ${selected === 'Intermediate' ? 'selected' : ''}`} onClick={() => handleSelection('Intermediate')}>
        <div className="circle-label">Intermediate</div>
      </div>
      <div className={`selector-circle ${selected === 'Hard' ? 'selected' : ''}`} onClick={() => handleSelection('Hard')}>
        <div className="circle-label">Hard</div>
      </div>
    </div>
  );
}

export default Selector;
