// src/LoginFailure.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Home from './btn/Home';
import { Route, Routes } from 'react-router-dom';
import ReplicaButton from './btn/ReplicaButton';
import SourceButton from './btn/SourceButton';
import { apiClient } from './ApiClient';

const Container = styled.div`
 flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Message = styled.h1`
  color: red;
`;
    
const WaitingTest = () => {
  
  return (
    <Container>
      <h1>[Waiting TEST]</h1>
      <h1>Connection Complete!! 🎉</h1>
      <Home/>
    </Container>
  );
};

export default WaitingTest;
