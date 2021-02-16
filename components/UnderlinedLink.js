import styled from "styled-components";
import media from "../utilities/mediaQueries";

const UnderlinedWrap = styled.span`
  display: inline-block;
  position: relative;
  margin: 0 10px;
  cursor: pointer;
`

const Underline = styled.div`
  background: linear-gradient(90deg, rgba(113,57,185,1) 0%, rgb(30, 170, 231) 100%);
  position: absolute;
  bottom: 0px;
  left: -10px;
  z-index: -1;
  height: 14px;
  width: 60%;
  
  @media(min-width: ${media.desktop2k}){
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

export default function UnderlinedLink({text}) {
    return (
        <UnderlinedWrap>
            {text}
            <Underline text />
        </UnderlinedWrap>
    );
}
