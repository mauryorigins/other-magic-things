// ---Dependencies
import React, { ReactElement, useState } from 'react';
import { Row, Col } from 'antd';
import InputMau from 'Comp/ListContainer/Input';
import InputButton from 'Comp/ListContainer/Buttons';
// ---Images

// ------------------------------------------ COMPONENT-----------------------------------------
export default function ListConteiner(): ReactElement {
  // ------------ Consts, Hooks, States  ----------------------
  const [lists, setLists] = useState<Lists>([]);
  const [current, setCurrent] = useState('');
  type Lists = Array<string>;
  // ------------ METHODS ----------------------.
  function changeLabelsState(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrent(event.target.value);
   }
  function addItem(event: React.SyntheticEvent) {
    event.preventDefault();
    if (current === '') {
      alert('no tiene nada');
    } else {
      setLists([...lists, current]);
      setCurrent('');
    }
  }
  // ------------ RENDER -----------------------
  return (
    <div className="listcont">
      <Row>
        <Col span={24}>
          <form onSubmit={addItem}>
            <InputMau onRead={changeLabelsState} current={current} />
            <br />
            <InputButton  />
          </form>
        </Col>
        <Col span={24}>
          <ul>
            {lists.map((element) => (
              <li>{element}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}
