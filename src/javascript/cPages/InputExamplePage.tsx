// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import InputExample from 'Cont/InputExample';

// ------------------------------------------ COMPONENT-----------------------------------------
function InputExamplePage (): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>Ejemplo de input</title>
      </Helmet>
      <InputExample />
    </>
  );
}

export default InputExamplePage;
