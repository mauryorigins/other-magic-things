import { Row } from 'antd';
import { Card } from 'Cont/FormCont';
import { ReactElement } from 'react';

interface Props{
    currentArray:Card[]
}

export  default function FormMap(props:Props):ReactElement {
const {currentArray}=props;
    return(
      <Row>
        <ul className="list">
          {currentArray.map((element)=>(
            <>
              <li key={element.cardName}>
                Name Card:
                {element.cardName}
              </li>
              <li key={element.cardName}>
                Expansion:
                {element.set}
              </li>
              <li key={element.cardName}>
                Mana Cost:
                {element.manaCost}
              </li>
              <li key={element.cardName}>
                Card Type:
                {element.cardType}
              </li>
              <li key={element.cardName}>
                Main Text:
                {element.oracleText}
              </li>
              <li key={element.cardName}>
                Collector Number:
                {element.collectorNumber}
              </li>
              <li key={element.cardName}>
                Rarity:
                {element.rarity}
              </li>
              <li key={element.cardName}>
                Price:$
                {element.price}
              </li>
              <img src={element.imgUrl} alt={element.cardName} />
            </>
          ))}
        </ul>
      </Row>
    )
}