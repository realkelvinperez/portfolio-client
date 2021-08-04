import React, { useState } from "react";
import Logo from "../Logo";
import NavMenu from "./NavMenu";
import styled from "styled-components";
import media from "../../utilities/mediaQueries";
import Menu from "./Menu";

const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: ${media.desktop2k}) {
    margin: 0;
  }

  @media (max-width: ${media.tablet}) {
    margin: 0;
  }

  @media (max-width: ${media.mobileL}) {
    margin-bottom: 1rem;
  }
`;

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(false);

  return (
    <HeaderNav>
      <Logo />
      <NavMenu callback={setIsMenuOpen} />
      {isMenuOpen && <Menu callback={setIsMenuOpen} />}
    </HeaderNav>
  );
};

export default Nav;
