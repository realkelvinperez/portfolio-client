import styled from "styled-components";
import ScrollDown from "./header/ScrollDown";
import HeroTextTagline from "./header/HeroText";
import MyName from "./header/MyName";
import CtaButtons from "./header/CTAButtons";
import Nav from "./header/Nav";
import media from "../utilities/mediaQueries";

const HeaderWrap = styled.div`
  background: rgb(0 0 0 / 40%);
  padding: 3rem;
  border-radius: 2rem;
  @media (min-width: ${media.desktop2k}) {
    height: 40vw;
    padding: 5rem;
    border-radius: 6rem;
  }
  @media (max-width: ${media.tablet}) {
    padding: 2rem;
  }
  @media (max-width: ${media.mobileL}) {
    padding: 2rem;
  }
`;

const HeroContentWrap = styled.div`
  width: 50%;
`;

export default function Header() {

  return (
    <HeaderWrap>
      <Nav />
      <HeroContentWrap>
        <MyName />
        <HeroTextTagline />
        <CtaButtons />
      </HeroContentWrap>
      <ScrollDown />
    </HeaderWrap>
  );
}
