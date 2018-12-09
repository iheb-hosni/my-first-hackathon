import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "../App";
import Card from "../components/card/card";
import Essayage from '../components/Essayage/Essayage'


export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/card" exact component={Card} />
      <Route path="/essayage" exact component={Essayage} />
    </Switch>
  </BrowserRouter>
);