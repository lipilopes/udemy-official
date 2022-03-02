import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './templates/Home';
import { Abc } from './templates/Abc';
import { Page404 } from './templates/Page404';
import { Menu } from './components/Menu';


import './styles/global-styles.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/abc/:slug/:name" component={Abc} />
        <Route path="/abc/:slug" component={Abc} />
        <Route path="/abc" component={Abc} />

        <Route path="/" component={Home} exact />

        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
