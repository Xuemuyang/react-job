import React from "react";
import Logo from "component/logo/logo";
import { List, InputItem, WingBlank, WhiteSpace, Button } from "antd-mobile";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: ''
    }
    this.register = this.register.bind(this);
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    });
  }

  register() {
    console.log(this.props);
    this.props.history.push("/register");
  }

  render() {
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <WhiteSpace />
            <InputItem onChange={v => this.handleChange("user", v)}>用户名</InputItem>
            <WhiteSpace />
            <InputItem onChange={v => this.handleChange("pwd", v)}>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary">登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type="primary">
            注册
          </Button>
        </WingBlank>
      </div>
    );
  }
}

export default Login;
