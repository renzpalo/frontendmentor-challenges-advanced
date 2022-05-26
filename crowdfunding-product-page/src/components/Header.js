import React from 'react';

import Container from "./Grid/Container";
import Navigation from './UI/Navigation/Navigation';

const Header = () => {
  return (
    <header>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;