import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NotificationIcon = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const NotificationPopup = styled.div`
  position: fixed;
  top: 60px;
  right: 20px;
  width: 300px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 100;
`;

const NotificationMessage = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  & svg {
    margin-right: 8px;
  }
`;

const NotificationButton = ({ notifications }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <>
      <NotificationIcon onClick={toggleNotifications}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24px"
          height="24px"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405C18.21 15.21 18 14.7 18 14V10a6 6 0 10-12 0v4c0 .7-.21 1.21-.595 1.595L4 17h5m1 4a2 2 0 104 0m-4 0h4"
          />
        </svg>
      </NotificationIcon>
      {showNotifications && (
        <NotificationPopup>
          {notifications.map((notification) => (
            <NotificationMessage key={notification.id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="20px"
                height="20px"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m-1-4h.01m6.364 6.364a9 9 0 11-12.728 0 9 9 0 0112.728 0z"
                />
              </svg>
              {notification.message}
            </NotificationMessage>
          ))}
        </NotificationPopup>
      )}
    </>
  );
};

export default NotificationButton;
