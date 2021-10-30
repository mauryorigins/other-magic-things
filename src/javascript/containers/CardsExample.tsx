// ---Dependencies
import React, {ReactElement, useState} from 'react';
import {Row, Col} from 'antd';
// ---Images
import someCard from 'Images/card.png'

// ------------------------------------------ COMPONENT-----------------------------------------
export default function CardsExample(): ReactElement {
  // ------------ Consts, Hooks, States  ----------------------
  const [cardsArray, setCardsArray] = useState<Array<Card>>([]);
  interface Card {
    imageRoute: string;
    name?: string
  }
  // ------------ METHODS ----------------------
  function addCards() {
    setCardsArray([...cardsArray,{imageRoute: someCard} ])
  }
  // ------------ RENDER -----------------------
  return (
    <Row>
      <Col span={24}>
        <button type="button" onClick={addCards}>Agregar</button>
      </Col>
      {
        cardsArray.map( element=>(
          <Col span={8}>
            <img src={element.imageRoute} alt={element.name || 'no name'} width="90%" />
          </Col>
        ))
      }
    </Row>
  )
}