// ---dependancies
import { Col, Row } from 'antd';
import React, { ReactElement, useState } from 'react';
import Form from 'Comp/InputExample/Form';
import { infoMagicCard1 } from 'Others/DataCards';
import FormMap from 'Comp/InputExample/FormMap';
// ---interface
export interface Card {
  cardName: string;
  set: string;
  manaCost: number;
  cardType: string;
  oracleText: string;
  collectorNumber: number;
  rarity: string;
  price: number;
  imgUrl: string;
}
// ---Component
export default function InputExamples():ReactElement{
// ---Const, Hook, lalala
const [currentArray, setcurrentArray]=useState<Array<Card>>([...infoMagicCard1]); 
const [currentName, setcurrentName]=useState('');
const [currentset, setcurrentSet]=useState('');
const [currentmanaCost, setcurrentManaCost]=useState(0);
const [currentCardType, setcurrentCardType]=useState('');
const [currentOracleText, setcurrentOracleText]=useState('');
const [currentCollectorNumber, setcurrentCollectorNumber]=useState(0);
const [currentRarity, setcurrentRarity]=useState('');
const [currentPrice, setcurrentPrice]=useState(0);
const [currentImg, setcurrentImg]=useState('');

// ---Methods
function concatenateInfo(event: React.SyntheticEvent){
  event.preventDefault();
  setcurrentArray([...currentArray,{
    cardName:currentName,
    set:currentset,
    manaCost:currentmanaCost,
    cardType:currentCardType,
    oracleText:currentOracleText,
    collectorNumber:currentCollectorNumber,
    rarity:currentRarity,
    price:currentPrice,
    imgUrl:currentImg}])
}
function onChangeName(event:React.ChangeEvent<HTMLInputElement>){
setcurrentName(event.target.value);
}
function onChangeSet(event:React.ChangeEvent<HTMLInputElement>){
  setcurrentSet(event.target.value);
}
function onChangeManaCost(event:React.ChangeEvent<HTMLInputElement>){
  setcurrentManaCost(event.target.valueAsNumber);
}
function onChangeCardType(event:React.ChangeEvent<HTMLInputElement>){
  setcurrentCardType(event.target.value);
}
function onChangeOracleText(event:React.ChangeEvent<HTMLInputElement>){
  setcurrentOracleText(event.target.value);
}
function onChangeCollectorNumber(event:React.ChangeEvent<HTMLInputElement>){
  setcurrentCollectorNumber(event.target.valueAsNumber);
}
function onChangeRarity(event:React.ChangeEvent<HTMLInputElement>){
  setcurrentRarity(event.target.value);
}
function onChangePrice(event:React.ChangeEvent<HTMLInputElement>){
  setcurrentPrice(event.target.valueAsNumber);
}
function onChangeImg(event:React.ChangeEvent<HTMLInputElement>){
setcurrentImg(event.target.value);
}
  return(
    <Row>
      <Col span={24}>
        <Form 
          onChangeName={onChangeName}
          onChangeSet={onChangeSet}
          onChangeManaCost={onChangeManaCost}
          onChangeCardType={onChangeCardType}
          onChangeOracleText={onChangeOracleText}
          onChangeCollectorNumber={onChangeCollectorNumber}
          onChangeRarity={onChangeRarity}
          onChangePrice={onChangePrice}
          onChangeImg={onChangeImg}
          concatenateInfo={concatenateInfo}
        />
      </Col>
      <Col span={12}>
        <FormMap currentArray={currentArray} /> 
      </Col>
    </Row>
    );
}