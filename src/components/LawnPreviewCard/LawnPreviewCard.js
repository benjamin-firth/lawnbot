import React from 'react';
import styled from 'styled-components';
import ReactCompareImage from 'react-compare-image';

const LawnPreviewCard = ({ beforePic, afterPic, services}) => {
  return (
    <StyledPreviewCard>
      <ReactCompareImage 
        leftImage={beforePic} 
        rightImage={afterPic}
      />
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
  -webkit-box-shadow: 0 10px 6px -6px #777;
	-moz-box-shadow: 0 10px 6px -6px #777;
	box-shadow: 0 10px 6px -6px #777;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 25px;
  width: 550px;

  p {
    font-weight: bold;
    margin-bottom: 0px;
  }
`;

export default LawnPreviewCard;