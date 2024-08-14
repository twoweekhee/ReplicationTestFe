import React, { useState } from 'react';
import styled from 'styled-components';
import { apiClient } from '../ApiClient';

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 10px;
  width: 200px;
  border: 2px solid #4CAF50; /* 테두리 두께와 색상 */
  border-radius: 4px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid #4CAF50; /* 테두리 두께와 색상 */
  border-radius: 10px;
  max-width: 300px;
  margin: 20px auto;
`;

const MessageButton = ({ addNotification }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      apiClient.post("/api/kafka", message, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(response => {
          alert(`Message sent: ${response.data}`);
          addNotification(response.data); // 새로운 알림 추가
          setMessage(''); // 메시지 전송 후 입력 필드 초기화
        })
        .catch(error => {
          console.error("There was an error sending the message!", error);
          alert('Failed to send the message.');
        });
    } else {
      alert('Please enter a message.');
    }
  };

  return (
    <Container>
      <Input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter your message"
      />
      <Button onClick={handleSendMessage}>
        Send Message
      </Button>
    </Container>
  );
};

export default MessageButton;
