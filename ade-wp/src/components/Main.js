import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Band from "./Band";

const Main = () => (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/band" component={Band} />
      </Switch>
    </main>
);

export default Main;
