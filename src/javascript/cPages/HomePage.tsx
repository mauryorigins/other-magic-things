// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import HomeCont from 'Cont/HomeCont';

// ------------------------------------------ COMPONENT-----------------------------------------
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Inicio</title>
      </Helmet>
      <HomeCont />
    </>
  );
};

export default HomePage;
