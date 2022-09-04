// ---Dependancies
import { Col, Row } from 'antd';
import React, { ReactElement } from 'react';
// ---Interfaces
interface Props {
  onChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSet: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeManaCost: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCardType: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeOracleText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCollectorNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeRarity: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeImg: (event: React.ChangeEvent<HTMLInputElement>) => void;
  concatenateInfo: (event: React.SyntheticEvent) => void;
}

// ---Components
export default function Form(props: Props): ReactElement {
  // ---Const
  const {
    onChangeName,
    onChangeSet,
    onChangeManaCost,
    onChangeCardType,
    onChangeOracleText,
    onChangeCollectorNumber,
    onChangeRarity,
    onChangePrice,
    onChangeImg,
    concatenateInfo,
  } = props;

  return (
    <Row>
      <Col span={4}>
        <form className="form-conteiner" onSubmit={concatenateInfo}>
          <input type="text" placeholder="Name Card" onChange={onChangeName} />
          <input type="text" placeholder="Set" onChange={onChangeSet} />
          <input type="number" placeholder="Mana Cost" onChange={onChangeManaCost} />
          <input type="text" placeholder="Card Type" onChange={onChangeCardType} />
          <input type="text" placeholder="Main text" onChange={onChangeOracleText} />
          <input type="number" placeholder="Card Number" onChange={onChangeCollectorNumber} />
          <input type="text" placeholder="Rarity" onChange={onChangeRarity} />
          <input type="number" placeholder="Price" onChange={onChangePrice} />
          <input type="text" placeholder="URL Image" onChange={onChangeImg} />
          <button type="submit">Agregar</button>
        </form>
      </Col>
    </Row>
  );
}
