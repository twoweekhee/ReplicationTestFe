import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { apiClient } from './ApiClient';

const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const WaitingInfo = styled.div`
  margin: 20px;
  font-size: 24px;
  color: #333;
`;

const Spinner = styled.div`
  margin: 20px;
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top: 5px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

function WaitingScreen() {
  const [position, setPosition] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      apiClient.get('/api/waiting')

        .catch(error => {
          console.error('Error fetching waiting data:', error);
        });
    };

    const fetchWaitingData = () => {
      apiClient.get('/api/order')
        .then(response => {
          setPosition(response.data);
          //setTotalWaiting(response.data.totalWaiting);
        })
        .catch(error => {
          console.error('Error fetching waiting data:', error);
        });
    };

    // 초기 데이터 가져오기
    fetchWaitingData();

    // 5초마다 데이터 갱신
    const intervalId = setInterval(fetchWaitingData, 1000);

    // 컴포넌트 언마운트 시 인터벌 클리어
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (position === 0) {
      navigate('/waiting'); // position이 0이 되면 /waiting 경로로 이동
    }
  }, [position, navigate]);

  return (
    <Container>
      <h1>대기 화면</h1>
      {position !== null ? (
        <>
          <WaitingInfo> {position} 명 접속했습니다. </WaitingInfo>
        </>
      ) : (
        <Spinner />
      )}
    </Container>
  );
}

export default WaitingScreen;
