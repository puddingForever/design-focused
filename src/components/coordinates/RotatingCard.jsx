import { useEffect, useState } from 'react';
import './rotatingCard.css';

// Create a card div with:
// Width: 200px
// Height: 300px
// Background: light blue
// Border: 2px solid black
// Position: relative
// Add a button that when clicked will:
// Rotate the card 360 degrees
// The rotation should take 1 second
// Use CSS transition for smooth animation
// The challenge part: Try three different transform-origin points and observe how the rotation changes:
// First try: transform-origin: center center; (default)
// Second try: transform-origin: top left;
// Third try: transform-origin: bottom right;

const RotatingCare = () => {
  const [animate, setAnimate] = useState('');
  const [cnt, setCnt] = useState(0);

  const handleAnimate = () => {
    setCnt((prev) => prev + 1);
  };

  useEffect(() => {
    if (cnt === 1) {
      setAnimate('animate-first');
    } else if (cnt === 2) {
      setAnimate('animate-second');
    } else if (cnt === 3) {
      setAnimate('animate-third');
    }
  }, [animate, cnt]);

  return (
    <div className={`container `}>
      <div className={`card ${animate}`}></div>
      <button onClick={() => handleAnimate()}>animate</button>
    </div>
  );
};

export default RotatingCare;
