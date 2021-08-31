// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import ImageExCont from 'Cont/ImageExCont';

// ------------------------------------------ COMPONENT-----------------------------------------
function ImageExPage (): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>Ejemplo con imagen</title>
      </Helmet>
      <ImageExCont />
    </>
  );
}

export default ImageExPage;
