// src/App.js
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GoogleButton from './btn/GoogleButton.js';
import NaverButton from './btn/NaverButton.js';
import KakaoButton from './btn/KakaoButton.js';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
`;

function Login() {
  return (
  
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Container>
              <GoogleButton />
              <NaverButton />
              <KakaoButton />
            </Container>
          } />
        </Routes>
    </div>
  );
}

export default Login;
