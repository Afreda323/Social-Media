import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Map from './Map'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducers from './reducers';

import App from './App';
import Auth from './Auth';
import Feed from './feed';
import Nav from './Nav'
import Author from './Author';
import Messages from './Messages';
import NoMatch from './NoMatch';
import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk';

const customHistory = createBrowserHistory()
ReactDOM.render((
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <BrowserRouter history={customHistory}>
      <div>
        <Nav />
        <Map />
        <div className='content'>
          <Switch>
            <Route exact path='/' component={App} />
            <Route path='/auth' component={Auth} />
            <Route path='/feed' component={Feed} />
            <Route path='/messages' component={Messages} />
            <Route path='/user' component={Author} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
