import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {createHashHistory} from "history";
import CaseDetails from "./src/components/CaseDetails.jsx";
import Header from "./src/components/Header.jsx";
import Footer from "./src/components/Footer.jsx";
import MoneySuit from './src/template/MoneySuit.jsx';

const hist = createHashHistory();

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path={'/'} component={CaseDetails} />
      <Route exact path={'/caseDetails'} component={CaseDetails} />
      <Route exact path={'/moneySuit'} component={MoneySuit} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
ReactDOM.render(<Footer />, document.getElementById('footer'));
