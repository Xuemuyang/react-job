import React from 'react'
import logoImg from 'assets/image/job.png'
import './logo.scss'

class Logo extends React.Component{

  render() {
    return (
      <div className="logo__container">
        <img src={logoImg} alt="logo"/>
      </div>
    )
  }
}

export default Logo
