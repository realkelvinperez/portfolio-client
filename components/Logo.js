import LogoSVG from '../public/assets/svg/Logo.svg'
import LogoBG from '../public/assets/img/logo-background-blur.png'
import styled from "styled-components";
import media from "../utilities/mediaQueries";
import { useRef, useEffect, useContext } from 'react'
import LoginContext from "../context/LoginContext";
import { gsap } from 'gsap';
import Tilt from 'react-parallax-tilt'

const HeaderLogoWrap = styled.div`
    position: relative;
    cursor: pointer;
`

const LogoImg = styled.img`
  @media (min-width: ${media.desktop2k}){
    width: 5vw;
  }
`

const LogoBGBlur = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
`

export default function Logo() {
    const { isLoading } = useContext(LoginContext)
    let logo = useRef(null);
    useEffect(() => {
        if(!isLoading){
            gsap.from(
                logo, {
                    x: -100,
                    opacity: 0,
                    ease: 'power2.inOut',
                    duration: 1
                })
        }
    },[isLoading])

    return (
        <Tilt scale={0.9} transitionSpeed={2500} >
            <HeaderLogoWrap ref={ el => { logo = el } }>
                <LogoImg src={LogoSVG}  alt='KP Logo'/>
                {/*<LogoSVG style={{width: '100%'}} />*/}
                <LogoBGBlur src={LogoBG} alt="Logo Background Blur"/>
            </HeaderLogoWrap>
        </Tilt>
    );
}
