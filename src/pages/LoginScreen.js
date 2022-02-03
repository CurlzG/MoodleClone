import React from "react";
import styled from "styled-components";

const LoginScreenScreen = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  z-index: 99;
`;
const Logo = styled.h1`
  margin: 0;
  color: #fff;
  height:25%;
  top:10%;
  position:absolute;
  width:100%;
  font-weight: 800;
  font-size: 80px;
`;
const Login = styled.div`
  margin: 0;
  color:black;
  position:absolute;
  height:50%;
  width:100%;
  right:10%;
  top:40%;
  font-weight: 800;
  font-size: 20px;
  display: flex;
  align-items:center;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 25px;
`;


export function LoginScreen() {
    return (
      <LoginScreenScreen>
          <Logo> Welcome To MoodleClone</Logo>
          <Login>

          </Login>
      </LoginScreenScreen>
    );
  }