// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import CardsExample from 'Cont/CardsExample';

// ------------------------------------------ COMPONENT-----------------------------------------
function CardsExamplePage (): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>Ejemplo de cards</title>
      </Helmet>
      <CardsExample />
    </>
  );
}

export default CardsExamplePage;
