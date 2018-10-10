import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './App'
import { counter } from './index.redux'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{}
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools
))

function One() {
  return <h1>一</h1>
}

function Two() {
  return <h1>二</h1>
}

ReactDom.render(
  (<Provider store={store}>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <Link to='/one'>一</Link>
            </li>
            <li>
              <Link to='/two'>二</Link>
            </li>
          </ul>
          <Route path='/' exact component={App}></Route>
          <Route path='/one' component={One}></Route>
          <Route path='/two' component={Two}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
)
