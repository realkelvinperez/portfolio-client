import styled, { css } from "styled-components";
import media from "../utilities/mediaQueries";

const Underline = styled.div`
  background: linear-gradient(90deg, #AC38D4 0%, #0EE0AE 100%);
  position: absolute;
  width: 40%;
  bottom: 7px;
  left: -0.9rem;
  z-index: -1;
  height: 20px;
  
  @media(min-width: ${media.desktop2k}){
    width: 20vw;
    bottom: 2px;
    height: 60px;
  }

  @media (max-width: ${media.tablet}){
    width: 30vw;
  }

  @media (max-width: ${media.mobileL}){
    width: 60%;
    left: -0.5rem;
    bottom: 0px;
    height: 17px;
  }
`

const HeadingWrap = styled.div`
  position: relative;
  font-family: coolvetica, sans-serif;
  color: white;
  font-size: 2vw;
  letter-spacing: .4rem;
  cursor: pointer;
  
  @media (max-width: ${media.mobileL}){
    font-size: 7.7vw;
    letter-spacing: 0.3rem;
  }
`

const HeadingText = styled.span`
  display: inline-block;
  transform: translate(10px, -9px);
  font-size: 2vw;
  text-transform: uppercase;
`

export default function Heading({ text }) {
    return (
        <HeadingWrap>
            <HeadingText>
            { text }
            </HeadingText>
            <Underline />
        </HeadingWrap>
    );
}
