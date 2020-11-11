import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import Navbar from '../Navbar/Navbar';
import WelcomeForm from '../WelcomeForm/WelcomeForm';
import LawnPreviewContainer from '../LawnPreviewContainer/LawnPreviewContainer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledMain>
        <Navbar />
        <StyledLower>
          <WelcomeForm />
          <LawnPreviewContainer />
        </StyledLower>
      </StyledMain>
    </ThemeProvider>
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
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  height: 88vh;
  justify-content: space-around;
`;

export default App;
