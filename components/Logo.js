import LogoSVG from '../public/assets/svg/Logo.svg'
import LogoBG from '../public/assets/img/logo-background-blur.png'
import styled from "styled-components";

const HeaderLogoWrap = styled.div`
    position: relative;
    cursor: pointer;
`

const LogoBGBlur = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

export default function Logo() {
    return (
        <HeaderLogoWrap>
            <LogoSVG />
            <LogoBGBlur src={LogoBG} alt="Logo Background Blur"/>
        </HeaderLogoWrap>
    );
}
