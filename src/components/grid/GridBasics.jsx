// In GridBasics.jsx, create a component that:
// Has a container div with class "grid-container"
// Contains 9 div elements with class "grid-item"
// Each grid item should display its number (1-9)
// In GridBasics.css, implement:
// A 3x3 grid layout
// Each grid item should be 100x100px
// Add 10px gap between items
// Center the entire grid in the container
// Make it responsive using minmax()

import './Grid.css';

const GridBasics = () => {
  return (
    <div className="grid-container">
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
  );
};

export default GridBasics;
