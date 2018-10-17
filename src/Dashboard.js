import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App'
import { logout } from './Auth.redux'

function Two() {
  return <h1>Two</h1>
}

function Three() {
  return <h1>Three</h1>
}

@connect(
  state=>state.auth,
  {logout}
)

class DashBoard extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const app = (
      <div>
        {this.props.isAuth ? <button onClick={this.props.logout}>Logout</button> : null}
        <ul>
          <li>
            <Link to='/dashboard'>App</Link>
          </li>
          <li>
            <Link to='/dashboard/two'>Two</Link>
          </li>
          <li>
            <Link to='/dashboard/three'>Three</Link>
          </li>
        </ul>
        <Route path='/dashboard/' exact component={App}></Route>
        <Route path='/dashboard/two' component={Two}></Route>
        <Route path='/dashboard/three' component={Three}></Route>
      </div>
    )
    return this.props.isAuth ? app : redirectToLogin
  }
}

export default DashBoard
