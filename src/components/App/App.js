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
    font-family: 'Open Sans', sans-serif;
  }
  height: 100vh;
  width: 100vw;
`;

const StyledLower = styled.section`
  align-items: center;
  background-color: #F8F2F2;
  display: flex;
  height: 88vh;
  justify-content: space-around;
`;

export default App;

