import React from 'react';
import styled from 'styled-components';
import LawnPreviewCard from '../LawnPreviewCard/LawnPreviewCard';
import { exampleYards } from '../../utils/exampleYards';

const LawnPreviewContainer = () => {
  const displayPreviewCards = () => {
    const yards = exampleYards.map(({ beforePic, afterPic, services }) => {
      return (
        <LawnPreviewCard 
          beforePic={beforePic} 
          afterPic={beforePic} 
          services={services} 
          key={Date.now() * Math.random()}/>
      );
    });
    return yards;
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