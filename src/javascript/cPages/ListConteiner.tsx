// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
// import ListConteiner from 'Cont/listoncontainers';
// import Form from 'Cont/Form';
import FormCont from 'Cont/FormCont';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function ListConteinerPage (): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>List example</title>
      </Helmet>
      <FormCont />
    </>
  );
}