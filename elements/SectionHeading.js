// noinspection CssInvalidPropertyValue
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
  @media (max-width: ${media.tablet}) {
    -webkit-text-stroke: white 2px;
    line-height: 1;
    font-size: 13vw;
    letter-spacing: 0.7rem;
  }
  @media (max-width: ${media.mobileL}) {
  }
  ${props => props.work && css`
      margin-bottom: -16vw;
      margin-top: 7vw;
      position: relative;
      z-index: 99;
    @media (max-width: ${media.mobileL}) {
      margin-bottom: -32vw;
      font-size: 16vw;
    }
  `}
`

export default SectionHeading;
