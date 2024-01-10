/* 
* NewBoxForm Component
* Renders a form to create a new Box.
* The form captures the box's width, height, and background color.
* 
* Props:
* -addBox: Function to add a new box to the list. 
 */

import React, { useState } from 'react';
import './NewBoxForm.css';

function NewBoxForm({ addBox }) {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ width, height, color });

    setWidth('');
    setHeight('');
    setColor('');
  };

  return (
    <div className="NewBoxForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="width">Width</label>
        <input
          id="width"
          type="text"
          value={width}
          onChange={e => setWidth(e.target.value)}
          placeholder="Width"
        />
        <label htmlFor="height">Height</label>
        <input
          id="height"
          type="text"
          value={height}
          onChange={e => setHeight(e.target.value)}
          placeholder="Height"
        />
        <label htmlFor="color">Color</label>
        <input
          id="color"
          type="text"
          value={color}
          onChange={e => setColor(e.target.value)}
          placeholder="Color"
        />
        <button type="submit">Add Box</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
