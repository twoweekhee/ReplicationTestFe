// src/NaverButton.js
import React from 'react';
import styled from 'styled-components';

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
  background-color: #28a745;
  border: 2px solid transparent;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    border-color: #D3D3D3;
  }
`;

const NaverButton = () => {
  return (
    <StyledButton href="http://localhost:80/oauth2/authorization/naver" role="button">
      Naver Login
    </StyledButton>
  );
};

export default NaverButton;
