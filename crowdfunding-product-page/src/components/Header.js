import React, { useRef } from 'react';

import Container from "./Grid/Container";

const Header = () => {
  const refNavMenu = useRef();

  const handleHamburgerMenu = (e) => {
    console.log(refNavMenu.current.style.background);

    if (refNavMenu.current.style.display !== 'none') {
      refNavMenu.current.style.display = 'block';
    } else {
      refNavMenu.current.style.display = 'none';
    }
  };

  return (
    <header>
      <Container>
        <nav className="nav">
          <a href="#" className="nav-brand">
            <img src="images/logo.svg" alt="crowdfund Logo" />
          </a>
          <div 
            className="nav-menu-hamburger" 
            onClick={handleHamburgerMenu}>
          </div>
          <div 
            className="nav-menu" 
            ref={refNavMenu}
            >
            <ul className="nav-menu__links">
              <li><a href="/">About</a></li>
              <li><a href="/">Discover</a></li>
              <li><a href="/">Get Started</a></li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;