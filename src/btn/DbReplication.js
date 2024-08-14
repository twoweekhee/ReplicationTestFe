import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 30px;
  padding: 10px;
  margin-bottom: 10px;
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

const DbReplication = () => {
  return (
    <StyledButton to="/db/replication">
      Db Replication Test
    </StyledButton>
  );
};

export default DbReplication;
