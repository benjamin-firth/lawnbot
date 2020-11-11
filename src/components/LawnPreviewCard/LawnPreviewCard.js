import React from 'react';
import styled from 'styled-components';
import ReactCompareImage from 'react-compare-image';

const LawnPreviewCard = ({ beforePic, afterPic, services, location}) => {
  const createKey = () => Date.now() * Math.random();
  const allServices = services.map(service => <li key={createKey()} >{service}</li>);

  return (
    <StyledPreviewCard>
      <StyledTitle>Yard in: {location}</StyledTitle>
      <ReactCompareImage leftImage={beforePic} rightImage={afterPic} />
      <StyledServices>Services Provided:</StyledServices>
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

const StyledTitle = styled.p`
  font-weight: bold;
`;

const StyledServices = styled(StyledTitle)`
  margin-bottom: 0px;
`;

export default LawnPreviewCard;
