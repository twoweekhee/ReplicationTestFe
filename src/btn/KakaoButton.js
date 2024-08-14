// src/KakaoButton.js
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;  // 버튼의 폭 설정
  height: 30px;  // 버튼의 높이 설정
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  color: #000;
  background-color: #ffeb3b;
  border: 2px solid transparent;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    border-color: #D3D3D3;  // 테두리 색 변경
  }
`;

const KakaoButton = () => {
  return (
    <StyledButton href="http://localhost:80/oauth2/authorization/kakao" role="button">
      Kakao Login
    </StyledButton>
  );
};

export default KakaoButton;
