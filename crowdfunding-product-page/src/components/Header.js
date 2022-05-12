import Container from "./Grid/Container";

const Header = () => {
  return (
    <header>
      <Container>
        <nav className="nav">
          <a href="#" className="nav-brand">
            <img src="images/logo.svg" alt="crowdfund Logo" />
          </a>
          <div className="nav-menu-hamburger">
            <img src="images/icon-hamburger.svg" alt="Hamburger Icon" />
          </div>
          <div className="nav-menu">
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