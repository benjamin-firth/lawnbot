import React from 'react';
import styled from 'styled-components';

const WelcomeForm = () => {
  return (
    <StyledWelcomeForm>
      <StyledWelcomeTitle>
        <h3>Thanks for filling in your lawn area!</h3>
      </StyledWelcomeTitle>
      <form>
        <label>Your approximate lawn size (sq ft)</label>
        <input placeholder="Example 1,500"/>
      </form>
    </StyledWelcomeForm>
  );
};

const StyledWelcomeForm = styled.section`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 25px;
    font-size: 1em;
  }

  input {
    height: 22px;
    margin-top: 10px;
    width: 82%;
  }
`;

const StyledWelcomeTitle = styled.div`
  background-color: #36b459;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #fff;
  padding: 20px;
`;

export default WelcomeForm;