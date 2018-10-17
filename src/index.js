import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
import reducers from './reducer'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{}
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  reduxDevtools
))

console.log(store.getState())

ReactDom.render(
  (<Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Auth}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Redirect to='/dashboard' component={Dashboard}></Redirect>
        </Switch>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
)
