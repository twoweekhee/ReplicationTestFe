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
    
const DbReplicationTest = () => {
    const [db, setDb] = useState('');

    useEffect(() => {
        apiClient.get('/api/db')
        .then(response => {
          setDb(response.data); 
        })
        .catch(error => {
          console.error('There was an error fetching the Db!', error);
        });
    }, []);

    return (
      <Container>
        <Routes>
            <Route path="/db/replication" element={<DbReplicationTest />} />
        </Routes>
        <h1>DB REPLICATION TEST</h1>
        <h2>현재 Database: {db}</h2>
        <ReplicaButton setDb={setDb} />
        <SourceButton setDb={setDb}/>
        <Home/>
      </Container>
    );
};

export default DbReplicationTest;
