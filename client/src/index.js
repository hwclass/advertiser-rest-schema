/* eslint-enable */
import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Main from './components/Main';
import * as stores from './stores';

useStrict(true);

ReactDOM.render(
  <Provider { ...stores }>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
