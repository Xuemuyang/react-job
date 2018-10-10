import React from 'react'
import { connect } from 'react-redux'
import { addOne, removeOne, addOneAsync } from './index.redux'

@connect(
  state => ({
    num: state
  }),
  { addOne, removeOne, addOneAsync }
)
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

export default App
