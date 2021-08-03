import Logo from "../Logo";
import styled from "styled-components";
import media from "../../utilities/mediaQueries";
import React, { useState, useRef, useEffect } from "react";
import CloseMenuIcon from "../../public/assets/svg/CloseMenu.svg";
import EmailIcon from "../../public/assets/svg/email.svg";
import GithubIcon from "../../public/assets/svg/github.svg";
import LinkedinIcon from "../../public/assets/svg/linkedin.svg";
import TwitterIcon from "../../public/assets/svg/twitter.svg";
import YoutubeIcon from "../../public/assets/svg/youtube.svg";
import gsap from "gsap";
import MyRef from "../../typings/MyRef";
import { trigger } from "../../utilities/events";

const MenuWrap = styled.div`
  display: grid;
  grid-template-columns: 70% 1fr;
  overflow: hidden;
`;

const MenuItem = styled.div`
  margin: 0 0 1rem;
  font-family: Soulmaze, sans-serif;
  font-size: 7rem;
  -webkit-text-stroke: 3px white;
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
    -webkit-text-stroke: 2px white;
    line-height: 1;
    font-size: 13vw;
    letter-spacing: 0.7rem;
  }
`;

const ItemWrap = styled.div`
  padding: 3rem 6rem;
`;

const SocialWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SocialIcon = styled.img`
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: grid;
  padding: 1rem;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

const IconText = styled.div`
  font-family: coolvetica, sans-serif;
  font-size: 4vw;
  letter-spacing: 2px;
  margin: 1.5rem 0;
  background: linear-gradient(270deg, #9750f2, #4cf0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  @media (max-width: ${media.tablet}) {
    font-size: 2.3vw;
  }
  @media (max-width: ${media.mobileL}) {
    font-size: 6vw;
  }
`;

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 6rem;
`;
const SVG = styled.img`
  cursor: pointer;
`;

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background: linear-gradient(127.31deg, #5a0583 -0.04%, #161c49 100%);
`;

interface IProps {
  callback: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu({ callback }: IProps) {
  const [isTextOnView, setIsTextOnView] = useState<boolean>(false);
  const [activeTextName, setActiveTextName] = useState<string>("");
  const [tween, setTween] = useState<Tween | null>(null);

  const closeMenu = () => {
    console.log("Close Menu and ", { callback });
    trigger("menu:close", {status: 'menu closed'});
    callback(false);
  };

  let linkedinEl: MyRef = useRef(null);
  let twitterEl: MyRef = useRef(null);
  let youtubeEl: MyRef = useRef(null);
  let emailEl: MyRef = useRef(null);
  let githubEl: MyRef = useRef(null);

  let home: MyRef = useRef(null);
  let aboutMe: MyRef = useRef(null);
  let myWork: MyRef = useRef(null);
  let mySkills: MyRef = useRef(null);
  let myResume: MyRef = useRef(null);
  let letsTalk: MyRef = useRef(null);

  // social media icons

  const onHover = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        setIsTextOnView(true);
        setActiveTextName("Linkedin");
        break;
      case "twitter":
        setIsTextOnView(true);
        setActiveTextName("Twitter");
        break;
      case "youtube":
        setIsTextOnView(true);
        setActiveTextName("YouTube");
        break;
      case "email":
        setIsTextOnView(true);
        setActiveTextName("Email");
        break;
      case "github":
        setIsTextOnView(true);
        setActiveTextName("Github");
        break;
      default:
        break;
    }
  };

  const onLeave = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        setIsTextOnView(false);
        setActiveTextName("Linkedin");
        break;
      case "twitter":
        setIsTextOnView(false);
        setActiveTextName("Twitter");
        break;
      case "youtube":
        setIsTextOnView(false);
        setActiveTextName("YouTube");
        break;
      case "email":
        setIsTextOnView(false);
        setActiveTextName("Email");
        break;
      case "github":
        setIsTextOnView(false);
        setActiveTextName("Github");
        break;
      default:
        break;
    }
  };

  // Menu items
  const onTextHover = (item: string) => {
    const vars = {
      webkitTextFillColor: "white",
      duration: 0.2,
      ease: "power2.inOut",
    };
    switch (item) {
      case "home":
        setTween(gsap.to(home, vars));
        break;
      case "aboutMe":
        setTween(gsap.to(aboutMe, vars));
        break;
      case "myWork":
        setTween(gsap.to(myWork, vars));
        break;
      case "mySkills":
        setTween(gsap.to(mySkills, vars));
        break;
      case "myResume":
        setTween(gsap.to(myResume, vars));
        break;
      case "letsTalk":
        setTween(gsap.to(letsTalk, vars));
        break;
      default:
        break;
    }
  };
  const onTextLeave = () => {
    tween.reverse();
  };

  return (
    <NavWrapper>
      <NavHeader>
        <Logo />
        <SVG onClick={closeMenu} src={CloseMenuIcon} />
      </NavHeader>
      <MenuWrap>
        <ItemWrap>
          <MenuItem
            ref={(el) => (home = el)}
            onMouseEnter={() => onTextHover("home")}
            onMouseLeave={() => onTextLeave()}
          >
            Home
          </MenuItem>
          <MenuItem
            ref={(el) => (aboutMe = el)}
            onMouseEnter={() => onTextHover("aboutMe")}
            onMouseLeave={() => onTextLeave()}
          >
            About Me
          </MenuItem>
          <MenuItem
            ref={(el) => (myWork = el)}
            onMouseEnter={() => onTextHover("myWork")}
            onMouseLeave={() => onTextLeave()}
          >
            My Work
          </MenuItem>
          <MenuItem
            ref={(el) => (mySkills = el)}
            onMouseEnter={() => onTextHover("mySkills")}
            onMouseLeave={() => onTextLeave()}
          >
            My Skills
          </MenuItem>
          <MenuItem
            ref={(el) => (myResume = el)}
            onMouseEnter={() => onTextHover("myResume")}
            onMouseLeave={() => onTextLeave()}
          >
            My Resume
          </MenuItem>
          <MenuItem
            ref={(el) => (letsTalk = el)}
            onMouseEnter={() => onTextHover("letsTalk")}
            onMouseLeave={() => onTextLeave()}
          >
            Let's Talk
          </MenuItem>
        </ItemWrap>
        <SocialWrap>
          <Wrapper>
            <IconText ref={(el) => (linkedinEl = el)}>LinkedIn</IconText>
            <IconText ref={(el) => (twitterEl = el)}>Twitter</IconText>
            <IconText ref={(el) => (youtubeEl = el)}>YouTube</IconText>
            <IconText ref={(el) => (emailEl = el)}>Email</IconText>
            <IconText ref={(el) => (githubEl = el)}>Github</IconText>
          </Wrapper>
          <Wrapper>
            <SocialIcon
              onMouseEnter={() => onHover("linkedin")}
              onMouseLeave={() => onLeave("linkedin")}
              src={LinkedinIcon}
            />
            <SocialIcon
              onMouseEnter={() => onHover("twitter")}
              onMouseLeave={() => onLeave("twitter")}
              src={TwitterIcon}
            />
            <SocialIcon
              src={YoutubeIcon}
              onMouseEnter={() => onHover("youtube")}
              onMouseLeave={() => onLeave("youtube")}
            />
            <SocialIcon
              onMouseEnter={() => onHover("email")}
              onMouseLeave={() => onLeave("email")}
              src={EmailIcon}
            />
            <SocialIcon
              onMouseEnter={() => onHover("github")}
              onMouseLeave={() => onLeave("github")}
              src={GithubIcon}
            />
          </Wrapper>
        </SocialWrap>
      </MenuWrap>
    </NavWrapper>
  );
}
