// ---Dependancies
import React ,{ReactElement} from 'react';
import { Row, Col } from 'antd';
// ---props type
interface Props {
onRead:(event:React.ChangeEvent<HTMLInputElement>)=>void;
current:string;
}
// ---Component
export default function InputMau (props:Props) : ReactElement {
// ---Hooks,Conts
const {onRead, current} = props // destructuracion de donde sale la variable
// ---Methods
// ---Render
return(
  <Row>
    <Col>
      <input type="text" onChange={onRead} value={current} />
    </Col>
  </Row> 
    );
}

