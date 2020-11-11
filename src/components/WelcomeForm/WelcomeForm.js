import React from 'react';
import { useDispatch } from 'react-redux';
import { setYardSize } from '../../actions';
import styled from 'styled-components';

const WelcomeForm = () => {
  const dispatch = useDispatch();

  const submitHandler = (sqft) => {
    dispatch(setYardSize(sqft));
  };

  return (
    <StyledWelcomeForm>
      <StyledWelcomeTitle>
        <h3>Thanks for filling in your lawn area!</h3>
      </StyledWelcomeTitle>
      <StyledForm>
        <label>Your approximate lawn size (sq ft)</label>
        <input 
          onChange={(e) => submitHandler(parseInt(e.target.value))} 
          type="number"
          placeholder="Example 1,500"
        />
      </StyledForm>
    </StyledWelcomeForm>
  );
};

const StyledWelcomeForm = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
	-moz-box-shadow: 0 10px 6px -6px #777;
	box-shadow: 0 10px 6px -6px #777;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const StyledWelcomeTitle = styled.div`
  background-color: ${({ theme }) => theme.colors.mainGreen};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #fff;
  padding: 10px 20px;
`;

const StyledForm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 25px 25px 30px 25px;;
  font-size: 1em;

  input {
    height: 22px;
    margin-top: 10px;
    width: 82%;
  }
`;

export default WelcomeForm;
