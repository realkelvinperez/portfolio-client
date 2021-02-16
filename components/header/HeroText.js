import styled from "styled-components";
import media from "../../utilities/mediaQueries";

const HeroText = styled.div`
    font-family: Coolvetica, sans-serif;
    color: white;
    letter-spacing: .3rem;
    font-size: 2rem;
  @media (min-width: ${media.desktop2k}){
    font-size: 3vw;
  }
  @media (max-width: ${media.mobileL}){
    font-size: 6vw;
  }
`

const HeroTextWrap = styled.div`
    position: relative;
    margin-top: 1rem;
    z-index: 10;
`

const Underline = styled.div`
  background: linear-gradient(90deg, rgba(113,57,185,1) 0%, rgb(30, 170, 231) 100%);
  position: absolute;
  width: 13vw;
  bottom: -1px;
  left: -0.9rem;
  z-index: -1;
  height: 15px;

  @media (min-width: ${media.desktop2k}){
    width: 20vw;
    height: 25px;
    bottom: 2px;
  }
  
  @media (max-width: ${media.tablet}){
    width: 30vw;
  }

  @media (max-width: ${media.mobileL}){
    width: 30vw;
    left: -0.5rem;
    bottom: -3px;
  }
`

export default function HeroTextTagline() {
    return (
        <HeroTextWrap>
            <HeroText>I love Building Beautiful <br /> Digital Experiences</HeroText>
            <Underline />
        </HeroTextWrap>
    );
}
