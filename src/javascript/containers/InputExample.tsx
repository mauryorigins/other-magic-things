// ---Dependencies
import React, { useState, ReactElement } from 'react';

// ---------------------Component---------------
export default function InputExample(): ReactElement {
  // ------------ Consts, Hooks, States  ----------------------
  const [labels, setLabels] = useState('');
  // ------------ METHODS ----------------------
  function changeLabelsState(event: React.ChangeEvent<HTMLInputElement>) {
    setLabels(event.target.value)
  }
  // ------------ RENDER -----------------------
  return(
    <>
      <input type="text" onChange={changeLabelsState} />
      <p>{labels}</p>
    </>
  )
}