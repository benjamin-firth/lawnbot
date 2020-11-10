import React from 'react';
import styled from 'styled-components';
import LawnPreviewCard from '../LawnPreviewCard/LawnPreviewCard';

const LawnPreviewContainer = () => {
  return (
    <StyledPreviewSection>
      <LawnPreviewCard />
      <LawnPreviewCard />
      <LawnPreviewCard />
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