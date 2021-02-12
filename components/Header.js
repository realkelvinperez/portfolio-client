import styled from 'styled-components';
import LogoSVG from '../public/assets/svg/Logo.svg'
import LogoBG from '../public/assets/img/logo-background-blur.png'
import BurgerMenu from '../public/assets/svg/Burger-Menu.svg'

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}


const LogoBGBlur = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

const HeaderWrap = styled.div`
    width: 83.33%;
    background: rgb(0 0 0 / 40%);
    padding: 2rem;
    border-radius: 2rem;
`

const HeaderInnerWrap = styled.div`
//    container for all hero components
`

const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 2rem; 
`


const HeaderLogoWrap = styled.div`
    position: relative;
    cursor: pointer;
`

const HeaderBurgerMenu = styled.div`
  filter: drop-shadow(0px 0px 9px #288F8F);
  cursor: pointer;
`

const HeroText = styled.div`
    font-family: Coolvetica, sans-serif;
    color: white;
    letter-spacing: .3rem;
    font-size: 2rem;
`

const HeroTextWrap = styled.div`
    position: relative;
    margin-top: 1rem;
    z-index: 10;
    margin-left: 1rem
`

const Kelvin = styled.div`
  color:white;
  font-family: Soulmaze, sans-serif;
  font-size: 8rem;
  margin: 0;
  line-height: 7rem;
`

const Perez = styled.div`
  margin: 0;
  font-family: Soulmaze, sans-serif;
  font-size: 8rem;
  -webkit-text-stroke: white 2px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 0px 9px white);
  line-height: 7rem;
  letter-spacing: 1.7rem;
`

const Underline = styled.div`
  width: 40%;
  background: linear-gradient(90deg, rgba(113,57,185,1) 0%, rgb(30, 170, 231) 100%);
  position: absolute;
  bottom: -1px;
  left: -0.9rem;
  z-index: -1;
  @media (min-width: ${size.tablet}){
    width: 35%;
    height: 20%;
  }
`

const HeroContentWrap = styled.div`
    width: 50%;
`

export default function Header() {
    return (
        <HeaderWrap>
            <HeaderInnerWrap>
                <HeaderNav>
                    <HeaderLogoWrap>
                        <LogoSVG />
                        <LogoBGBlur src={LogoBG} alt="Logo Background Blur"/>
                    </HeaderLogoWrap>
                    <HeaderBurgerMenu>
                        <BurgerMenu />
                    </HeaderBurgerMenu>
                </HeaderNav>
            </HeaderInnerWrap>
            <HeroContentWrap>
                <Kelvin>
                    Kelvin
                </Kelvin>
                <Perez>
                    Perez
                </Perez>
                <HeroTextWrap>
                    <HeroText>I love Building Beautiful <br /> Digital Experiences</HeroText>
                    <Underline />
                </HeroTextWrap>
            </HeroContentWrap>
        </HeaderWrap>
    );
}
