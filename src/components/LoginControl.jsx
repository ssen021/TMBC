import React, { Component } from "react";
import { LoginBox } from "./LoginControl.style";

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button;
    if (isLoggedIn) {
      button = <button onClick={this.handleLogoutClick}>로그아웃</button>;
    } else {
      button = <button onClick={this.handleLoginClick}>로그인</button>;
    }

    return (
      <LoginBox>
        {isLoggedIn ? (
          <h1>환영합니다! 로그인되었습니다.</h1>
        ) : (
          <h1>로그인이 필요합니다.</h1>
        )}
        {button}
      </LoginBox>
    );
  }
}

export default LoginControl;
