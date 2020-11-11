import React from 'react';
import styled from 'styled-components';
import ReactCompareImage from 'react-compare-image';

const LawnPreviewCard = ({ beforePic, afterPic, services, location}) => {
  const allServices = services.map(service => <li key={Date.now() * Math.random()} >{service}</li>);

  return (
    <StyledPreviewCard>
      <StyledTop>Yard in: {location}</StyledTop>
      <ReactCompareImage leftImage={beforePic} rightImage={afterPic} />
      <StyledTitle>Services Provided:</StyledTitle>
      <ul>
        {allServices}
      </ul>
    </StyledPreviewCard>
  );
};

const StyledPreviewCard = styled.article`
  background-color: #fff;
  border-radius: 5px;
	box-shadow: 0 10px 6px -6px #777;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 5px 25px 15px 25px;
  width: 550px;
`;

const StyledTop = styled.p`
  font-weight: bold;
`;

const StyledTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0px;
`;

export default LawnPreviewCard;