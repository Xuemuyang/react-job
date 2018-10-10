import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import { counter, addOne, removeOne } from './index.redux'

const store = createStore(counter)

function render() {
  ReactDom.render(<App store={store} addOne={addOne} removeOne={removeOne}/>, document.getElementById('root'))
}

render()

store.subscribe(render)
