import styled, {css} from "styled-components";
import media from "../utilities/mediaQueries";

const SectionHeading = styled.div`
  margin: 0;
  font-family: Soulmaze, sans-serif;
  font-size: 8rem;
  -webkit-text-stroke: white 3px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 0px 9px white);
  line-height: 7rem;
  letter-spacing: 1.7rem;
  text-align: center;
  @media (min-width: ${media.desktop2k}) {
    font-size: 8vw;
    margin-bottom: 5rem;
  }
  @media (max-width: ${media.laptop}) {
    font-size: 5.5rem;
  }
  @media (max-width: ${media.tablet}) {
    -webkit-text-stroke: white 2px;
    line-height: 1;
    font-size: 13vw;
    letter-spacing: 0.7rem;
  }
  ${props => props.work && css`
      margin-bottom: -16vw;
      margin-top: 7vw;
      position: relative;
      z-index: 99;
    @media (min-width: ${media.desktop2k}) {
      margin-bottom: -20rem;
    }
    @media (max-width: ${media.mobileL}) {
      margin-bottom: -32vw;
      font-size: 16vw;
    }
  `}
  ${props => props.skills && css`
    margin-top: -20vw;
    position: relative;
    z-index: 99;
    margin-bottom: 12rem;
    @media (min-width: ${media.desktop2k}) {
    }
    @media (max-width: ${media.tablet}) {
      font-size: 12vw;
      margin-bottom: 1rem; 
    }
    @media (max-width: ${media.mobileL}) {
      font-size: 16vw;
      transform: translate(0, -73px);
    }
  `}
`

export default SectionHeading;
