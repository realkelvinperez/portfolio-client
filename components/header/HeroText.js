import styled from "styled-components";
import media from "../../utilities/mediaQueries";

const HeroText = styled.div`
    font-family: Coolvetica, sans-serif;
    color: white;
    letter-spacing: .3rem;
    font-size: 2rem;
`

const HeroTextWrap = styled.div`
    position: relative;
    margin-top: 1rem;
    z-index: 10;
    margin-left: 1rem
`

const Underline = styled.div`
  width: 40%;
  background: linear-gradient(90deg, rgba(113,57,185,1) 0%, rgb(30, 170, 231) 100%);
  position: absolute;
  bottom: -1px;
  left: -0.9rem;
  z-index: -1;
  @media (min-width: ${media.tablet}){
    width: 35%;
    height: 20%;
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
