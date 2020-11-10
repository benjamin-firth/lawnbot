import React from 'react';
import styled from 'styled-components';

const LawnPreviewCard = () => {
  return (
    <StyledPreviewCard>
      <img src='https://www.mypurelawn.com/wp-content/uploads/before-after3.jpg'/>
      <p>Services Provided:</p>
      <ul>
        <li>example</li>
        <li>example</li>
        <li>example</li>
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