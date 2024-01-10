import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';

function BoxList() {
  // Initialize a state variable to hold the boxes. This starts with an empty array:
  const [boxes, setBoxes] = useState([]);

  // function in BoxList that can add a new box to our state.
  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, { ...newBox, id: uuidv4() }]);
  };

  // function in BoxList that can remove a box from our state
  const removeBox = (boxId) => {
    setBoxes(boxes => boxes.filter(box => box.id !== boxId));
  };

  return (
    <div className="BoxList">
      {boxes.map(box => (
        <Box
          key={box.id}
          id={box.id}
          width={box.width}
          height={box.height}
          color={box.color}
          removeBox={removeBox} // passing removeBox as a prop
        />

      ))}
      <NewBoxForm addBox={addBox} />
    </div>
  );
}

export default BoxList;

