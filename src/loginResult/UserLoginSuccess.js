// src/LoginSuccess.js
import React from 'react';
import styled from 'styled-components';
import Home from '../btn/Home';

const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
`;

const Message = styled.h1`
  color: green;
`;

const UserLoginSuccess = () => {
  return (
    <Container>
     <h1>사용자 로그인 되었습니다. 성공!</h1>
     <Home/>
    </Container>
  );
};

export default UserLoginSuccess;
