// noinspection CssInvalidPropertyValue
import styled from "styled-components";
import media from "../../utilities/mediaQueries";

const AboutText = styled.div`
  margin: 0;
  font-family: Soulmaze, sans-serif;
  font-size: 7.4vw;
  -webkit-text-stroke: white 3px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 0px 9px white);
  line-height: 7rem;
  letter-spacing: 1.7rem;
  position: absolute;
  transform: rotate(-90deg) translate(-17vw, -19.2vw);
  @media (min-width: ${media.desktop2k}){
    font-size: 8.4vw;
    -webkit-text-stroke: white 6px;
    transform: rotate(-90deg) translate(-19.2vw,-19.6vw);
  }
  @media (max-width: ${media.laptopL}){
    transform: rotate(-90deg) translate(-17vw,-20vw);
  }
  @media (max-width: ${media.laptop}){
    line-height: 4rem;
    font-size: 8.5vw;
    letter-spacing: 0.8rem;
    transform: rotate(-90deg) translate(-17vw,-21vw);
  }
  @media (max-width: ${media.tablet}){
    -webkit-text-stroke: white 2px;
  }
  @media (max-width: ${media.mobileL}){
    font-size: 16.5vw;
    transform: rotate(0deg) translate(0,-31px);
  }
`

export default AboutText;
