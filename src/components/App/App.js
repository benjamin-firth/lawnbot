import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import WelcomeForm from '../WelcomeForm/WelcomeForm';
import LawnPreviewContainer from '../LawnPreviewContainer/LawnPreviewContainer';

const App = () => {
  return (
    <main>
      <Navbar />
      <section>
        <WelcomeForm />
        <LawnPreviewContainer />
      </section>
    </main>
  );
};

export default App;
