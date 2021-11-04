// ---Dependencies
import React, {ReactElement, useState, useReducer} from 'react';
import {Row, Col} from 'antd';
import InputForm from 'Comp/Form/InputForm';
import DataForm from 'Comp/Form/DataForm';
// ---Images
import someCard from 'Images/card.png'

export interface Card {
  imageRoute: string;
  name: string;
}
interface Action {
  type:string;
  payload:unknown;
}
const initialState:Array<Card> = [];

function reducer (state:Array<Card>, action:Action) {
  const {type ,  payload}=action;
  switch(type)
  {
    case 'addCards': 
    return [...state, payload];
    default:
      return state as Array<Card>;
  }
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function Form(): ReactElement {
  // ------------ Consts, Hooks, States  ----------------------
  const [formCard, setFormCard] = useReducer(reducer, initialState);
  const [current, setCurrent] = useState('');
  // ------------ METHODS ----------------------
  function uploadName(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrent(event.target.value);
    // setCurrent('');
   }
  function addInfo() {
    console.log('before: ',formCard )
    console.log('before: ',current )
    const newArray = {imageRoute: someCard, name:current}
    console.log(newArray)
    setFormCard([...formCard,newArray])
    console.log('after: ',formCard )
    console.log('after: ',current )
  }

  // ------------ RENDER -----------------------
  return (
    <Row>
      <Col span={24}>
        <InputForm uploadName={uploadName} addInfo={addInfo} current={current} />
      </Col>
      <Col span={24}>
        <DataForm formCard={formCard} />
      </Col>
    </Row>
  )
}