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
    
    const displayYards = yards.map(({ beforePic, afterPic, services }) => {
      return (
        <LawnPreviewCard 
          beforePic={beforePic} 
          afterPic={beforePic} 
          services={services} 
          key={Date.now() * Math.random()}/>
      );
    });
    
    return displayYards;
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
`;

export default LawnPreviewContainer;