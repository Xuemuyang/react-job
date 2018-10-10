import React from 'react'

class App extends React.Component{
  render() {
    const store = this.props.store
    const num = store.getState()
    const addOne = this.props.addOne
    const removeOne = this.props.removeOne
    const addOneAsync = this.props.addOneAsync
    return (
      <div>
        <h1>现在有{num}</h1>
        <button onClick={() => store.dispatch(addOne())}>add</button>
        <button onClick={() => store.dispatch(removeOne())}>remove</button>
        <button onClick={() => store.dispatch(addOneAsync())}>twosAsync</button>
      </div>
    )
  }
}

export default App
