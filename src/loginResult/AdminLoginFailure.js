// src/LoginFailure.js
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
  color: red;
`;

const AdminLoginFailure = () => {
  return (
    <Container>
      <h1>관리자 로그인 실패.... </h1>
      <Home/>
    </Container>
  );
};

export default AdminLoginFailure;
