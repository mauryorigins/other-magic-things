// ---Dependencies
import React, { ReactElement, useState } from 'react';
import { Row, Col } from 'antd';
// ---Components
import FormCards from 'Comp/CardsExample/FormCards';
// ---Images
import someCard from 'Images/card.png';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function CardsExample(): ReactElement {
  // ------------ Consts, Hooks, States  ----------------------
  const [cardsArray, setCardsArray] = useState<Array<Card>>([]);
  const [currentName, setCuerrentName] = useState('');
  const [currentUrl, setCuerrentUrl] = useState(someCard);
  interface Card {
    imageRoute: string;
    name: string;
  }
  // ------------ METHODS ----------------------
  function addCards(event: React.SyntheticEvent) {
    event.preventDefault();
    setCardsArray([
      ...cardsArray,
      { imageRoute: currentUrl, name: currentName }
    ]);
    // clean name
    setCuerrentName('');
  }
  function onChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setCuerrentName(event.target.value);
  }
  function onChangeUrl(event: React.ChangeEvent<HTMLInputElement>) {
    setCuerrentUrl(event.target.value);
  }
  // ------------ RENDER -----------------------
  return (
    <Row className="cards-container">
      <Col span={24}>
        <FormCards
          onChangeName={onChangeName}
          onChangeUrl={onChangeUrl}
          addCards={addCards}
          currentUrl={currentUrl}
          currentName={currentName}
        />
      </Col>
      {cardsArray.map((element) => (
        <Col key={element.name} span={8}>
          <h3>{element.name}</h3>
          <img
            src={element.imageRoute}
            alt={element.name || 'no name'}
            width="90%"
          />
        </Col>
      ))}
    </Row>
  );
}
