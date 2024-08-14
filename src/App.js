import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Login from './Login';
import SignUp from './SignUp';
import UserLoginSuccess from './loginResult/UserLoginSuccess';
import UserLoginFailure from './loginResult/UserLoginFailure';
import AdminLoginSuccess from './loginResult/AdminLoginSuccess';
import AdminLoginFailure from './loginResult/AdminLoginFailure';
import { apiClient } from './ApiClient';
import DbReplication from './btn/DbReplication';
import DbReplicationTest from './DbReplicationTest';
import WaitingTestButton from './btn/WaitingTestButton';
import WaitingTest from './WaitingTest';
import WaitingScreen from './WaitingScreen';
import NotificationButton from './btn/NotificationButton';
import MainContent from './MainContent';  // 분리된 MainContent 컴포넌트 임포트

const Container = styled.div`
  display: flex;
  height: 100vh; /* 전체 화면 높이 설정 */
`;

const Sidebar = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f4f4f4;
  padding: 20px;
  border-right: 2px solid #ddd;
`;

const App = () => {
  const [port, setPort] = useState('');
  const [db, setDb] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  const addNotification = (message) => {
    setNotifications(prevNotifications => [
      ...prevNotifications,
      { id: prevNotifications.length + 1, message }
    ]);
  };

  useEffect(() => {
    // 서버로부터 포트 번호를 가져오기 위한 Axios 요청
    apiClient.get('/api/port')
      .then(response => {
        setPort(response.data); // 포트 번호를 상태에 저장
      })
      .catch(error => {
        console.error('There was an error fetching the port!', error);
      });

    apiClient.get('/api/db')
      .then(response => {
        setDb(response.data); 
      })
      .catch(error => {
        console.error('There was an error fetching the Db!', error);
      });

    apiClient.get('/api/check')
      .then(response => {
        setIsLoggedIn(response.data.loggedIn); 
        setRole(response.data.role);
      })
      .catch(error => {
        console.error('There was an error checking login status!', error);
      });

    // 예제 알림 데이터
    setNotifications([
      { id: 1, message: '새로운 알림이 도착했습니다!' },
      { id: 2, message: 'DB 레플리케이션 테스트가 완료되었습니다.' },
    ]);
  }, []);

  return (
    <Router>
      <Container>
        <Sidebar>
          <h2>현재 서버 포트: {port}</h2>
          <DbReplication />
          <WaitingTestButton />
          <h1>로그인</h1>
          <Login />
          <NotificationButton notifications={notifications} />
        </Sidebar>
        
        <Routes>
          <Route 
            path="/" 
            element={<MainContent 
              isLoggedIn={isLoggedIn} 
              role={role} 
              addNotification={addNotification} />} 
          />
          <Route path="/oauth-login/join" element={<SignUp />} />
          <Route path="/user/oauth-login/success" element={<UserLoginSuccess />} />
          <Route path="/user/oauth-login/failure" element={<UserLoginFailure />} />
          <Route path="/admin/oauth-login/success" element={<AdminLoginSuccess />} />
          <Route path="/admin/oauth-login/failure" element={<AdminLoginFailure />} />
          <Route path="/db/replication" element={<DbReplicationTest />} />       
          <Route path="/waitingScreen" element={<WaitingScreen />} />
          <Route path="/waiting" element={<WaitingTest />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
