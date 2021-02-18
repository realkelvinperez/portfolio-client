import styled, { css } from "styled-components";
import media from "../utilities/mediaQueries";

const TitleUnderline = styled.div`
  background: linear-gradient(90deg, rgba(113,57,185,1) 0%, rgb(30, 170, 231) 100%);
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

export default TitleUnderline;
