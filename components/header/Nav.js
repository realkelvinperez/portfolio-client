import Logo from "../Logo";
import NavMenu from "./NavMenu";
import styled from "styled-components";
import media from "../../utilities/mediaQueries";
import { useState, useRef, useEffect } from "react";
import CloseMenuIcon from '../../public/assets/svg/CloseMenu.svg'
import EmailIcon from '../../public/assets/svg/email.svg'
import GithubIcon from '../../public/assets/svg/github.svg'
import LinkedinIcon from '../../public/assets/svg/linkedin.svg'
import TwitterIcon from '../../public/assets/svg/twitter.svg'
import YoutubeIcon from '../../public/assets/svg/youtube.svg'
import gsap from 'gsap'

const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem; 
  @media (min-width: ${media.desktop2k}){
    margin: 0;
  }
  @media (max-width: ${media.tablet}){
    margin: 0;
  }
  @media (max-width: ${media.mobileL}){
    margin-bottom: 1rem;
  }
`

const Menu = styled.div`

  display: grid;
  grid-template-columns: 70% 1fr;
`

const MenuItem = styled.div`
  margin: 0 0 1rem;
  font-family: Soulmaze, sans-serif;
  font-size: 7rem;
  -webkit-text-stroke: white 3px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  //filter: drop-shadow(0px 0px 6px white);
  line-height: 7rem;
  letter-spacing: 1.7rem;
  cursor: pointer;

  @media (min-width: ${media.desktop2k}) {
    font-size: 8vw;
    margin-bottom: 5rem;
  }
  @media (max-width: ${media.tablet}) {
    -webkit-text-stroke: white 2px;
    line-height: 1;
    font-size: 13vw;
    letter-spacing: 0.7rem;
  }
`

const ItemWrap = styled.div`
  padding: 3rem 6rem;
`

const SocialWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const SocialIcon = styled.img`
  cursor: pointer;
`

const Wrapper = styled.div`
  display: grid;
  padding: 1rem;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`

const IconText = styled.div`
  font-family: coolvetica, sans-serif;
  font-size: 4vw;
  letter-spacing: 2px;
  margin: 1.5rem 0;
  background: linear-gradient(270deg,#9750F2,#4CF0F0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  @media (max-width: ${media.tablet}){
    font-size: 2.3vw;
  }
  @media (max-width: ${media.mobileL}){
    font-size: 6vw;
  }
`

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 6rem;
`
const SVG = styled.img`
  cursor: pointer;
`

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background: linear-gradient(127.31deg, #5A0583 -0.04%, #161C49 100%);
`

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const [tween, setTween] = useState(null)

    const closeMenu = () => {
        console.log('Close Menu')
    }

    let linkedinEl = useRef(null)
    let twitterEl = useRef(null)
    let youtubeEl = useRef(null)
    let emailEl = useRef(null)
    let githubEl = useRef(null)

    let home = useRef(null)
    let aboutMe = useRef(null)
    let myWork = useRef(null)
    let mySkills = useRef(null)
    let myResume = useRef(null)
    let letsTalk = useRef(null)

    useEffect(() => {

    }, [])

    const onHover = (iconName) => {
        switch(iconName){
            case 'linkedin':
                linkedinEl.style.cssText = 'opacity: 1'
                break;
            case 'twitter':
                twitterEl.style.cssText = 'opacity: 1'
                break;
            case 'youtube':
                youtubeEl.style.cssText = 'opacity: 1'
                break;
            case 'email':
                emailEl.style.cssText = 'opacity: 1'
                break;
            case 'github':
                githubEl.style.cssText = 'opacity: 1'
                break;
            default:
                break;
        }
    }
    const onLeave = (iconName) => {
        switch(iconName){
            case 'linkedin':
                linkedinEl.style.cssText = 'opacity: 0'
                break;
            case 'twitter':
                twitterEl.style.cssText = 'opacity: 0'
                break;
            case 'youtube':
                youtubeEl.style.cssText = 'opacity: 0'
                break;
            case 'email':
                emailEl.style.cssText = 'opacity: 0'
                break;
            case 'github':
                githubEl.style.cssText = 'opacity: 0'
                break;
            default:
                break;
        }
    }

    const onTextHover = (item) => {
        const vars = {
            webkitTextFillColor: 'white',
            ease: 'power2.inOut'
        }
        switch(item){
            case 'home':
                setTween(gsap.to(home, vars))
                break;
            case 'aboutMe':
                setTween(gsap.to(aboutMe, vars))
                break;
            case 'myWork':
                setTween(gsap.to(myWork, vars))
                break;
            case 'mySkills':
                setTween(gsap.to(mySkills, vars))
                break;
            case 'myResume':
                setTween(gsap.to(myResume, vars))
                break;
            case 'letsTalk':
                setTween(gsap.to(letsTalk, vars))
                break;
            default:
                break;
        }
    }
    const onTextLeave = () => {
        tween.reverse()
    }


    const showMenu = () => {
        if(!isMenuOpen) return
        if(isMenuOpen){
            return (
                <NavWrapper>
                    <NavHeader>
                        <Logo />
                        <SVG onClick={closeMenu} src={CloseMenuIcon} />
                    </NavHeader>
                    <Menu>
                    <ItemWrap>
                        <MenuItem
                            ref={el => home = el}
                            onMouseEnter={() => onTextHover('home')}
                            onMouseLeave ={() => onTextLeave('home')}
                        >
                            Home
                        </MenuItem>
                        <MenuItem
                            ref={el => aboutMe = el}
                            onMouseEnter={() => onTextHover('aboutMe')}
                            onMouseLeave ={() => onTextLeave('aboutMe')}
                        >
                            About Me
                        </MenuItem>
                        <MenuItem
                            ref={el => myWork = el}
                            onMouseEnter={() => onTextHover('myWork')}
                            onMouseLeave ={() => onTextLeave('myWork')}
                        >
                            My Work
                        </MenuItem>
                        <MenuItem
                            ref={el => mySkills = el}
                            onMouseEnter={() => onTextHover('mySkills')}
                            onMouseLeave ={() => onTextLeave('mySkills')}
                        >
                            My Skills
                        </MenuItem>
                        <MenuItem
                            ref={el => myResume = el}
                            onMouseEnter={() => onTextHover('myResume')}
                            onMouseLeave ={() => onTextLeave('myResume')}
                        >
                            My Resume
                        </MenuItem>
                        <MenuItem
                            ref={el => letsTalk = el}
                            onMouseEnter={() => onTextHover('letsTalk')}
                            onMouseLeave ={() => onTextLeave('letsTalk')}
                        >
                            Let's Talk
                        </MenuItem>
                    </ItemWrap>
                    <SocialWrap>
                        <Wrapper>
                           <IconText ref={el => linkedinEl = el}>
                               LinkedIn
                           </IconText>
                            <IconText ref={el => twitterEl = el}>
                                Twitter
                            </IconText>
                            <IconText ref={el => youtubeEl = el}>
                                YouTube
                            </IconText>
                            <IconText ref={el => emailEl = el}>
                                Email
                            </IconText>
                            <IconText ref={el => githubEl = el}>
                                Github
                            </IconText>
                        </Wrapper>
                        <Wrapper>
                            <SocialIcon
                                onMouseEnter={() => onHover('linkedin')}
                                onMouseLeave={() => onLeave('linkedin')}
                                src={LinkedinIcon}
                            />
                            <SocialIcon
                                onMouseEnter={() => onHover('twitter')}
                                onMouseLeave={() => onLeave('twitter')}
                                src={TwitterIcon}
                            />
                            <SocialIcon
                                src={YoutubeIcon}
                                onMouseEnter={() => onHover('youtube')}
                                onMouseLeave={() => onLeave('youtube')}
                            />
                            <SocialIcon
                                onMouseEnter={() => onHover('email')}
                                onMouseLeave={() => onLeave('email')}
                                src={EmailIcon}
                            />
                            <SocialIcon
                                onMouseEnter={() => onHover('github')}
                                onMouseLeave={() => onLeave('github')}
                                src={GithubIcon}
                            />
                        </Wrapper>
                    </SocialWrap>
                </Menu>
                </NavWrapper>
            )
        }
    }
    return (
        <HeaderNav>
            <Logo />
            <NavMenu />
            {showMenu()}
        </HeaderNav>
    );
}

export default Nav
