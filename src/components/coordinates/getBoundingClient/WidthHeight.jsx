import { useRef } from 'react';
import './widthheight.css';
import { useState } from 'react';

const WidthHeight = () => {
  const boxRef = useRef(null);
  const [measurements, setMeasurements] = useState({});
  const showBoundingClient = () => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      setMeasurements({
        height: rect.height,
        width: rect.width,
      });
    }
  };

  return (
    <div className="container">
      <div className="box" ref={boxRef}></div>
      <button onClick={() => showBoundingClient()}>Button</button>
      <div>Height : {measurements.height}</div>
      <div>Width : {measurements.width}</div>
    </div>
  );
};

export default WidthHeight;
