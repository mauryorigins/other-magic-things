// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import Error404Cont from 'Cont/Error404Cont';

// ------------------------------------------ COMPONENT-----------------------------------------
function Error404Page(): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <Error404Cont />
    </>
  );
}

export default Error404Page;
