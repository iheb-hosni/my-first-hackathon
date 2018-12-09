import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "../App";
import Card from "../components/card/card";


export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/card" exact component={Card} />
    </Switch>
  </BrowserRouter>
);