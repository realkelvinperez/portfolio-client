import LogoSVG from '../public/assets/svg/Logo.svg'
import LogoBG from '../public/assets/img/logo-background-blur.png'
import styled from "styled-components";
import media from "../utilities/mediaQueries";

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
    return (
        <HeaderLogoWrap>
            <LogoImg src={LogoSVG}  alt='KP Logo'/>
            {/*<LogoSVG style={{width: '100%'}} />*/}
            <LogoBGBlur src={LogoBG} alt="Logo Background Blur"/>
        </HeaderLogoWrap>
    );
}
