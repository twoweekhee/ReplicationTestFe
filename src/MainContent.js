// src/MainContent.js
import React from 'react';
import styled from 'styled-components';
import MessageButton from './btn/MessageButton';

const Content = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const MainContent = ({ isLoggedIn, role, addNotification }) => {
  return (
    <Content>
      {isLoggedIn ? (
        role === 'admin' ? (
          <MessageButton addNotification={addNotification} />
        ) : (
          <h3>관리자만 메시지 버튼을 사용할 수 있습니다.</h3>
        )
      ) : (
        <h2>로그인을 해주세요</h2>
      )}
    </Content>
  );
};

export default MainContent;
