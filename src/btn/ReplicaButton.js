import React from 'react';
import styled from 'styled-components';
import { apiClient } from '../ApiClient';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #FF6347;
  border: 2px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-color: #D3D3D3;
  }
`;

const ReplicaButton = ({ setDb }) => {

  const handleReplicaClick = () => {
    apiClient.get('/api/replica')
      .then(response => {
        setDb(response.data);  // 부모 컴포넌트의 상태를 업데이트
      })
      .catch(error => {
        console.error('There was an error fetching the Db!', error);
      });
  };

  return (
    <StyledButton onClick={handleReplicaClick}>
      Replica
    </StyledButton>
  );
};

export default ReplicaButton;