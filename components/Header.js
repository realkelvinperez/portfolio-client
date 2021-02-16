import styled from 'styled-components';
import LogoSVG from '../public/assets/svg/Logo.svg'
import LogoBG from '../public/assets/img/logo-background-blur.png'
import BurgerMenu from '../public/assets/svg/Burger-Menu.svg'
import MyWorkBtn from '../public/assets/svg/MyWorkBtn.svg'
import LetsTalk from '../public/assets/svg/LetsTalkBtn.svg'

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
    //width: 100%;
    background: rgb(0 0 0 / 40%);
    padding: 3rem;
    border-radius: 2rem;
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
  @media (min-width: ${size.tablet}){
    -webkit-text-stroke: white 3px;
  }
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

const CTABtnWrap = styled.div`
    margin-top: 2rem;
`

const ScrollDownWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ScrollDown = styled.div`
 margin: 0 1rem; 
`

const ScrollDownText = styled.text`
  color: white;
  font-family: Coolvetica, sans-serif;
  letter-spacing: 0.2rem;
  font-size: 1.3rem;
  opacity: 0.4;
`

const ScrollProgress = styled.div`
    width: 50%;
    height: 13px;
    background: linear-gradient(270deg, rgba(113,57,185,1) 0%, rgb(30, 170, 231) 100%);
    position: fixed;
    top: 0;
    left: 0;
`

export default function Header() {
    return (
        <HeaderWrap>
            <HeaderNav>
                <HeaderLogoWrap>
                    <LogoSVG />
                    <LogoBGBlur src={LogoBG} alt="Logo Background Blur"/>
                </HeaderLogoWrap>
                <HeaderBurgerMenu>
                    <BurgerMenu />
                </HeaderBurgerMenu>
            </HeaderNav>
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
                <CTABtnWrap>
                    <MyWorkBtn style={{marginRight: '2rem', cursor: 'pointer'}} />
                    <LetsTalk style={{ cursor: 'pointer'}} />
                </CTABtnWrap>
            </HeroContentWrap>
            <ScrollDownWrap>
                <ScrollDownText>
                    Scroll
                </ScrollDownText>
                <ScrollDown>
                    <svg width="40" height="85" viewBox="0 0 40 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 19.5591C0 8.7569 8.95431 0 20 0C31.0457 0 40 8.75691 40 19.5591V65.4409C40 76.2431 31.0457 85 20 85C8.95431 85 0 76.2431 0 65.4409V19.5591ZM20 3.00909C10.6536 3.00909 3.07692 10.4188 3.07692 19.5591V65.4409C3.07692 74.5812 10.6536 81.9909 20 81.9909C29.3464 81.9909 36.9231 74.5812 36.9231 65.4409V19.5591C36.9231 10.4188 29.3464 3.00909 20 3.00909Z" fill="url(#paint0_linear)"/>
                        <rect className="scroll-down-ball" x="10.5" y="9.46326" width="20" height="20" rx="10" fill="url(#paint1_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="20" y1="1.50455" x2="20" y2="83.4955" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#AC38D5"/>
                                <stop offset="1" stopColor="#4CF0F0"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="20.5" y1="9.46326" x2="20.5" y2="29.4633" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#AC38D5"/>
                                <stop offset="1" stopColor="#1EAAE7"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </ScrollDown>
                <ScrollDownText>
                    Down
                </ScrollDownText>
            </ScrollDownWrap>
            <ScrollProgress />
        </HeaderWrap>
    );
}
