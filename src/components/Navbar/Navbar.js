import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <StyledNav>
      <StyledNavTitle>Lawnbot Similar Services</StyledNavTitle>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  align-items: center;
  background-color: #4f7cfe;
  display: flex;
  height: 12vh;
  padding-left: 20px;
`;

const StyledNavTitle = styled.h1`
  color: #fff;
  font-size: 2em;
  letter-spacing: 6px;
`;

export default Navbar;