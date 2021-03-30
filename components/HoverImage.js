// import {useRef, useState} from 'react'
import styled, { css } from 'styled-components'
// import gsap from 'gsap'

const HoverReveal = styled.div`
    position: absolute;
    z-index: -1;
    width: 220px;
    height: 320px;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
`

const RevealInner = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
`

const RevealImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  background-position: 50% 50%;
  
  ${props => props.bgSrc && css`
    background-image: url(${props.bgSrc});
  `}
`

export default function HoverImage({src}) {
    return (
            <HoverReveal>
                <RevealInner>
                    <RevealImage bgSrc={src}/>
                </RevealInner>
            </HoverReveal>
    );
}
