import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import WelcomeForm from '../WelcomeForm/WelcomeForm';
import LawnPreviewContainer from '../LawnPreviewContainer/LawnPreviewContainer';

const App = () => {
  return (
    <StyledMain>
      <Navbar />
      <section>
        <WelcomeForm />
        <LawnPreviewContainer />
      </section>
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

export default App;
