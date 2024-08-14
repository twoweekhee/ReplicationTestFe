import React, { useEffect, useState } from 'react';
import { apiClient } from './ApiClient';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const RadioButton = styled.label`
  margin: 0 20px;
  font-size: 18px;
  input {
    margin-right: 10px;
    transform: scale(1.5);
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const SignUp = () => {
  const [role, setRole] = useState('USER');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 세션에서 임시 사용자 정보를 가져옵니다.
    apiClient.get('/api/oauth-join/user')
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching session user:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    apiClient.post('/api/oauth-join/user', { ...user, role })
      .then(response => {
        if (response.status === 200) {
          navigate('/' + role + '/oauth-login/success');
        }
      })
      .catch(error => {
        console.error('Error registering user:', error);
        // 에러 처리
      });
  };

  //if (!user) return <div>Loading...</div>;

  return (
    <Container>
      <h2>회원가입</h2>
      <Form onSubmit={handleSubmit}>
        <RadioGroup>
          <RadioButton>
            <input
              type="radio"
              value="user"
              checked={role === 'user'}
              onChange={() => setRole('user')}
            />
            사용자
          </RadioButton>
          <RadioButton>
            <input
              type="radio"
              value="admin"
              checked={role === 'admin'}
              onChange={() => setRole('admin')}
            />
            관리자
          </RadioButton>
        </RadioGroup>
        <SubmitButton type="submit">가입</SubmitButton>
      </Form>
    </Container>
  );
};

export default SignUp;
