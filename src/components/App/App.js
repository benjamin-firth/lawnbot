import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import WelcomeForm from '../WelcomeForm/WelcomeForm';
import LawnPreviewContainer from '../LawnPreviewContainer/LawnPreviewContainer';

const App = () => {
  return (
    <StyledMain>
      <Navbar />
      <StyledLower>
        <WelcomeForm />
        <LawnPreviewContainer />
      </StyledLower>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  * {
    margin: 0px;
    padding: 0px;
  }
  width: 100vw;
  height: 100vh;
`;

const StyledLower = styled.section`
  align-items: center;
  background-color: #F8F2F2;
  display: flex;
  height: 88vh;
  justify-content: space-around;
`;

export default App;
