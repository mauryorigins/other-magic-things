// ---Dependencys
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// ---Pages
import HomePage from 'Pages/HomePage';
import ImageExPage from 'Pages/ImageExPage';
import InputExamplePage from 'Pages/InputExamplePage';
import CardsExamplePage from 'Pages/CardsExamplePage';
import Error404Page from 'Pages/Error404Page';
import ListPage from 'Pages/list';
import ListConteiner from 'Pages/ListConteiner'
// ---Components
import NavbarCont from 'Cont/NavbarCont';

function AppContainer() : React.ReactElement {
  return (
    <BrowserRouter>
      <NavbarCont />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/img" component={ImageExPage} />
        <Route exact path="/input" component={InputExamplePage} />
        <Route exact path="/cards" component={CardsExamplePage} />
        <Route exact path="/list" component={ListPage} />
        <Route exact path="/listContainer" component={ListConteiner} />
        <Route exact path="*" component={Error404Page} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppContainer;
