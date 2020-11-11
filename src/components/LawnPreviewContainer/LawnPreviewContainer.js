import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import LawnPreviewCard from '../LawnPreviewCard/LawnPreviewCard';
import { exampleYards } from '../../utils/exampleYards';

const LawnPreviewContainer = () => {
  const currentYardSize = useSelector(state => state.currentYardSize)

  const displayPreviewCards = () => {
    let yards;
    if (currentYardSize === null || isNaN(currentYardSize)) {
      yards = exampleYards;
    } else {
      yards = exampleYards.filter(yard => yard.yardSize < currentYardSize + 1000 && yard.yardSize > currentYardSize - 1000 );
    };
    
    const displayYards = yards.map(({ beforePic, afterPic, services, location }) => {
      return (
        <LawnPreviewCard 
          beforePic={beforePic} 
          afterPic={afterPic}
          location={location}
          services={services} 
          key={Date.now() * Math.random()}/>
      );
    });

    if (displayYards.length > 0) {
      return displayYards;
    } else {
      return (
        <StyledAlert>
          <h2>No yards match your size</h2>
        </StyledAlert>
      )
    };
  };

  return (
    <StyledPreviewSection>
      { displayPreviewCards() }
    </StyledPreviewSection>
  );
};

const StyledPreviewSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow: scroll;
  padding-bottom: 10px;
  width: 45vw;
`;

const StyledAlert = styled.div`
  align-items: center;
  color: #6a6a6a;
  display: flex;
  height: 80vh;
  justify-content: center; 
  width: 45vw;
`;

export default LawnPreviewContainer;