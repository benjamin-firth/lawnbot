import React from 'react';
import styled from 'styled-components';
import ReactCompareImage from 'react-compare-image';

const LawnPreviewCard = ({ beforePic, afterPic, services, location}) => {
  const createKey = () => Date.now() * Math.random();
  const allServices = services.map(service => <li key={createKey()} >{service}</li>);

  return (
    <StyledPreviewCard>
      <StyledTop>
        <h3>Yard in: {location}</h3>
      </StyledTop>
      <BodyWrapper>
        <ReactCompareImage leftImage={beforePic} rightImage={afterPic} />
      <StyledServices>Services Provided:</StyledServices>
      <ul>
        {allServices}
      </ul>
      </BodyWrapper>
    </StyledPreviewCard>
  );
};

const StyledPreviewCard = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
	box-shadow: 0 10px 6px -6px #777;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 0px 0px 15px 0px;
  width: 550px;
`;

const StyledTop = styled.div`
  background-color: ${({ theme }) => theme.colors.mainGreen};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #fff;
  margin-bottom: 15px;
  padding: 10px 20px;
`;

const BodyWrapper = styled.div`
  margin: 0px 25px 0px 25px;
`;

const StyledServices = styled.p`
  font-weight: bold;
  margin-bottom: 0px;
`;

export default LawnPreviewCard;
