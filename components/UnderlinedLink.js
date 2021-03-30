import { useRef } from 'react';
import styled from "styled-components";
import media from "../utilities/mediaQueries";
import gsap from 'gsap'
import HoverImage from "./HoverImage";

const UnderlinedWrap = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`

const Underline = styled.span`
  display: inline-block;
  background: linear-gradient(90deg, rgba(113,57,185,1) 0%, rgb(30, 170, 231) 100%);
  position: absolute;
  bottom: 0;
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

export default function UnderlinedLink({text, src, miami, playSound = () => null, stopSound = () => null}) {

    let underline = useRef(null)

    const handleEnter= () => {
        gsap.to(underline, {
            width: '100%'
        })
        playSound()
    }

    const handleLeave = () => {
        gsap.to(underline, {
            width: '60%'
        })
        stopSound()
    }

    return (
        <UnderlinedWrap
            onMouseLeave={handleLeave}
            onMouseEnter={handleEnter}
        >
            <span>{text}</span>
            {miami && <HoverImage src={src} />}
            <Underline ref={el => underline = el} text />
        </UnderlinedWrap>
    );
}
