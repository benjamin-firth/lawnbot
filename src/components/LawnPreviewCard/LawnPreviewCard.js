import React from 'react';
import styled from 'styled-components';

const LawnPreviewCard = ({ beforePic, afterPic, services}) => {
  return (
    <StyledPreviewCard>
      <img src={beforePic} />
      <p>Services Provided:</p>
      <ul>
        { services.map(service => <li key={Date.now() * Math.random()} >{service}</li>) }
      </ul>
    </StyledPreviewCard>
  );
};

const StyledPreviewCard = styled.article`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 10px;
  width: 550px;
`;

export default LawnPreviewCard;