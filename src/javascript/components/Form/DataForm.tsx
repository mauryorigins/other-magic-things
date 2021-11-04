// ---Dependencies
import { ReactElement } from 'react';
import { Col } from 'antd'
import {Card} from 'Cont/Form'
// ---Interface
interface Props {
  formCard:Card[];
}
// ---Components
export default function DataForm(props:Props):ReactElement {
// ------------ Consts, Hooks, States  ----------------------
const { formCard } = props;
  return(
    <div>
      {
    formCard.map( (element)=>(
      <Col span={8} key={element.name}>
        <img src={element.imageRoute} alt={element.name} width="90%" />
      </Col>
    ))
  }
    </div>
); 
}