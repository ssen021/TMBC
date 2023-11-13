import React from "react";
import { useNavigate } from "react-router-dom";
import { NotFoundInfo } from "./Movies.style";

export default function Loginpage() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/Home");
  };
  return (
    <NotFoundInfo>
      <h2>회원가입</h2>
      <p>아이디 입력하세용</p>
      <button onClick={handleHome}>로그인</button>
    </NotFoundInfo>
  );
}
