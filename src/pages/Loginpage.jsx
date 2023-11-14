import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginInfo, RedP } from "./Movies.style";

export default function Loginpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [pw, setPW] = useState("");
  const [isPWValid, setIsPWValid] = useState(true);

  const handleHome = () => {
    // 확인버튼을 누를 때 유효성 검사를 수행
    if (isEmailValid && isPWValid) {
      navigate("/TMBC");
    }
  };

  const EmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    // 사용자가 입력할 때마다
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    setIsEmailValid(isValid);
  };

  const PWChange = (e) => {
    const inputValue = e.target.value;
    setPW(inputValue);

    const isPWValid =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        inputValue
      );
    setIsPWValid(isPWValid);
  };

  return (
    <LoginInfo>
      <h2>이메일과 비밀번호를 입력해주세요</h2>
      <p>이메일 주소</p>
      <input type="text" value={email} onChange={EmailChange} />
      {isEmailValid ? (
        <RedP>&nbsp;</RedP>
      ) : (
        <RedP>올바른 이메일을 입력해주세요.</RedP>
      )}
      <p>비밀번호</p>
      <input type="password" value={pw} onChange={PWChange} />
      {isPWValid ? (
        <RedP>&nbsp;</RedP>
      ) : (
        <RedP>영문,숫자,특수문자 포함 8자 이상 입력하세요.</RedP>
      )}
      <button onClick={handleHome}>확인</button>
    </LoginInfo>
  );
}
