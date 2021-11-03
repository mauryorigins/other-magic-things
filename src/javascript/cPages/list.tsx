// ---Dependencys
import React from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import List from 'Cont/list';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function ListPage (): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>List example</title>
      </Helmet>
      <List />
    </>
  );
}