import React from 'react'
import axios from 'axios'

class AuthRoute extends React.Component {
  componentDidMount() {
    // 获取用户信息
    axios.get('/user/info')
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return <h1>哈哈</h1>
  }
}

export default AuthRoute
