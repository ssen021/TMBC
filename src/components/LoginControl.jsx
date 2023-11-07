import React, { Component } from "react";
import { LoginBox, StyledParagraph, Button } from "./LoginControl.style";

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
      button = <Button onClick={this.handleLogoutClick}>로그아웃</Button>;
    } else {
      button = <Button onClick={this.handleLoginClick}>로그인</Button>;
    }

    return (
      <LoginBox>
        {button}
        {isLoggedIn ? (
          <StyledParagraph>환영합니다!</StyledParagraph>
        ) : (
          <StyledParagraph>로그인 해주세요</StyledParagraph>
        )}
      </LoginBox>
    );
  }
}

export default LoginControl;
