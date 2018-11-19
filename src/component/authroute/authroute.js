import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
@withRouter

class AuthRoute extends React.Component {
  componentDidMount() {
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    if (~publicList.indexOf(pathname)) {
      return false
    }
    // 获取用户信息
    axios.get('/user/info')
      .then(res => {
        if (res.status === 200) {
          if (res.data.code === 0) {
            //
          } else {
            console.log(this.props.history)
            this.props.history.push('/login')
          }
        }
      })
  }

  render() {
    return <h1>哈哈</h1>
  }
}

export default AuthRoute
