import React from 'react'
import { connect } from 'react-redux'
import { addOne, removeOne, addOneAsync } from './index.redux'

@connect(
	state=>({num:state.counter}),
	{ addOne, removeOne, addOneAsync }
)
class App extends React.Component{
	render(){
		return (
			<div>
				<h1>现在有{this.props.num}</h1>
				<button onClick={this.props.addOne}>加一</button>
				<button onClick={this.props.removeOne}>减一</button>
				<button onClick={this.props.addOneAsync}>延迟两秒加</button>
			</div>
		)
	}
}

export default App
