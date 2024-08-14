import React from 'react';
import styled from 'styled-components';
import Login from './Login';

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 30px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: 2px solid transparent;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    border-color: #D3D3D3;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
`;


const AdminLoginButton = () => {
  return (
    <Container>
      <h1>관리자 로그인</h1>
      <Login/>
    </Container>
  
  );
};

export default AdminLoginButton;
