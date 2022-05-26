import React, { useRef } from 'react';

const Navigation = () => {
  const refNavMenu = useRef();

  const handleHamburgerMenu = (e) => {
    if (refNavMenu.current.style.display == 'block') {
      refNavMenu.current.style.display = 'none';

      e.target.style.backgroundImage = 'url(images/icon-hamburger.svg)';
    } else {
      refNavMenu.current.style.display = 'block';

      e.target.style.backgroundImage = 'url(images/icon-close-menu.svg)';
    }
  };

  return (
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
  );
};

export default Navigation;