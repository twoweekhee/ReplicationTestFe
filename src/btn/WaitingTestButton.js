import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { apiClient } from '../ApiClient';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 30px;
  padding: 10px;
  margin-bottom: 50px;
  font-size: 16px;
  color: #fff;
  background-color: #FFB6C1;
  border: 2px solid transparent;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    border-color: #D3D3D3;
  }
`;

const WaitingTestButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
      apiClient.get('/api/check/waiting')
      .then(response => {

        const result = response.data;
        if (result) {
          navigate('/waiting');  // 대기열이 있으면 WaitingScreen으로 이동
        } else {
          navigate('/waitingScreen');  // 대기열이 없으면 WaitingTest로 이동
        }
      })
      .catch(error => {
        console.error('There was an error checking the waiting status!', error);
      });
  };

  return (
    <StyledButton onClick={handleClick}>
      Waiting Test
    </StyledButton>
  );
};

export default WaitingTestButton;