// Create a grid with 9 items (3x3)
// Make the grid smaller than its container (e.g., 80% width and height)
// Add buttons to toggle between different alignment options:
// Center (default)
// Start
// End
// Space-between
// Space-around
// Space-evenly
// Apply these alignments to both:
// justify-content (horizontal alignment)
// align-content (vertical alignment)

import { useState } from 'react';
import './Grid.css';

const GridAlignment = () => {
  const [horizontalAlign, setHorizontalAlign] = useState('center');
  const [verticalAlign, setVerticalAlign] = useState('center');

  return (
    <div className="alignment-container">
      <div className="controls">
        <div className="control-group">
          <h3>Horizontal Alignment</h3>
          <button onClick={() => setHorizontalAlign('center')}>Center</button>
          <button onClick={() => setHorizontalAlign('start')}>Start</button>
          <button onClick={() => setHorizontalAlign('end')}>End</button>
          <button onClick={() => setHorizontalAlign('space-between')}>
            Space Between
          </button>
          <button onClick={() => setHorizontalAlign('space-around')}>
            Space Around
          </button>
          <button onClick={() => setHorizontalAlign('space-evenly')}>
            Space Evenly
          </button>
        </div>

        <div className="control-group">
          <h3>Vertical Alignment</h3>
          <button onClick={() => setVerticalAlign('center')}>Center</button>
          <button onClick={() => setVerticalAlign('start')}>Start</button>
          <button onClick={() => setVerticalAlign('end')}>End</button>
          <button onClick={() => setVerticalAlign('space-between')}>
            Space Between
          </button>
          <button onClick={() => setVerticalAlign('space-around')}>
            Space Around
          </button>
          <button onClick={() => setVerticalAlign('space-evenly')}>
            Space Evenly
          </button>
        </div>
      </div>

      <div
        className="alignment-grid-container"
        style={{
          justifyContent: horizontalAlign,
          alignContent: verticalAlign,
        }}
      >
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item">7</div>
        <div className="grid-item">8</div>
        <div className="grid-item">9</div>
      </div>
    </div>
  );
};

export default GridAlignment;
