import { useEffect } from 'react';
import styled from "styled-components";
import media from "../utilities/mediaQueries";

const UnderlinedWrap = styled.span`
  display: inline-block;
  position: relative;
  cursor: pointer;
`

const Underline = styled.span`
  display: inline-block;
  background: linear-gradient(90deg, rgba(113,57,185,1) 0%, rgb(30, 170, 231) 100%);
  position: absolute;
  bottom: 0px;
  left: -10px;
  z-index: -1;
  height: 14px;
  width: 60%;
  
  @media(min-width: ${media.desktop2k}){
    height: 30px;
  }
  
  @media (max-width: ${media.tablet}){
    height: 9px;
  }

  @media (max-width: ${media.mobileL}){
    height: 12px;
  }
`

export default function UnderlinedLink({text, callBack = () => console.log('No Call Back')}) {

    // useEffect(() => {
    //
    // }, [])

    const handleHover = () => {
        callBack()
    }

    return (
        <UnderlinedWrap onMouseEnter={handleHover}>
            {text}
            <Underline text />
        </UnderlinedWrap>
    );
}
