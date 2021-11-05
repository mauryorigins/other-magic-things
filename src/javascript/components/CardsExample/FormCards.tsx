// ---Dependencies
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ----------------------------------------- PROPS TYPES ---------------------------------------
interface Props {
  addCards: (event: React.SyntheticEvent)=>void;
  onChangeName: (event: React.ChangeEvent<HTMLInputElement>)=>void;
  onChangeUrl: (event: React.ChangeEvent<HTMLInputElement>)=>void;
  currentUrl: string;
  currentName: string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function FormCards(props: Props): ReactElement {
  const { addCards, onChangeName, onChangeUrl, currentUrl, currentName } = props;
  return(
    <form onSubmit={addCards}>
      <Row>
        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
          <span>Nombre: </span>
          <input type="text" value={currentName} onChange={onChangeName} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
          <span>URL: </span>
          <input type="text" value={currentUrl} onChange={onChangeUrl} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
          <button type="submit">Agregar</button>
        </Col>
      </Row>
    </form>
  )
}