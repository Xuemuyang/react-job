import React from 'react'
import { addOne, removeOne, addOneAsync } from './index.redux'
import { connect } from 'react-redux'

class App extends React.Component{
  render() {
    const num = this.props.num
    const addOne = this.props.addOne
    const removeOne = this.props.removeOne
    const addOneAsync = this.props.addOneAsync
    return (
      <div>
        <h1>现在有{num}</h1>
        <button onClick={() => addOne()}>add</button>
        <button onClick={() => removeOne()}>remove</button>
        <button onClick={() => addOneAsync()}>twosAsync</button>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return { num : state }
}

const actionCreators = { addOne, removeOne, addOneAsync }

App = connect(mapStatetoProps, actionCreators)(App)
export default App
