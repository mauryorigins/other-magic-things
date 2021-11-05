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
  payload:Card;
}
const initialState:Array<Card> = [];

function reducer (state:Array<Card>, action:Action):Array<Card> {
  const {type ,  payload}=action;
  switch(type)
  {
    case 'addCards': 
    return [...state, payload];
    default:
      return state;
  }
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function Form(): ReactElement {
  // ------------ Consts, Hooks, States  ----------------------
  const [formCard, setFormCard] = useReducer(reducer, initialState);
  const [current, setCurrent] = useState('');
  // ------------ METHODS ----------------------
  function uploadName(event: React.ChangeEvent<HTMLInputElement>){
    setCurrent(event.target.value);
   }
  function addInfo(ev:React.SyntheticEvent) {
    const red  = {type:'addCards', payload:{imageRoute:someCard, name:current}} 
    ev.preventDefault();
    setFormCard(red)
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