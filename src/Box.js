/**
 * Box Component
 * 
 * Renders a single box with specified width, height, and color. 
 * Includes button to remove box
 * 
 * Props:
 *  -id: Unique identifier for the box
 *  -width: Width of box
 *  -height: Height of the box
 *  -color: Bakground color of the box
 *  -removeBox: Function ro remove the box from the list 
 */

import React from 'react';
import './Box.css';

function Box({ id, width, height, color, removeBox }) {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
    display: 'inline-block', 
    marginRight: '10px' 
  };

  return (
    <div className="Box-container">
      <div style={boxStyle}></div>
      <button className="remove-button" onClick={() => removeBox(id)}>x</button>
    </div>
  );
}


export default Box;
