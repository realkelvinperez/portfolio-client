import React, { useState, useRef, useEffect } from "react";
import Logo from "../Logo";
import styled from "styled-components";
import media from "../../utilities/mediaQueries";
import CloseMenuIcon from "../../public/assets/svg/CloseMenu.svg";
import gsap from "gsap";
import MyRef from "../../typings/MyRef";
import SocialMenu from "./SocialMenu";
import { trigger } from "../../utilities/events";
import Tilt from "react-parallax-tilt";
import { useRouter } from "next/router";

const MenuWrap = styled.div`
  display: grid;
  grid-template-columns: 70% 1fr;
  overflow: hidden;
`;

const MenuItem = styled.a`
  margin: 0 0 1rem;
  font-family: Soulmaze, sans-serif;
  font-size: 7rem;
  display: block;
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
  const [tween, setTween] = useState<Tween | null>(null);
  const router = useRouter()

  let menuWrap: MyRef = useRef(null);
  let closeBtn: MyRef = useRef(null);
  let home: MyRef = useRef(null);
  let aboutMe: MyRef = useRef(null);
  let myWork: MyRef = useRef(null);
  let mySkills: MyRef = useRef(null);
  let myResume: MyRef = useRef(null);
  let letsTalk: MyRef = useRef(null);

  const closeMenu = () => {
    gsap.to(menuWrap, {
      x: -3000,
      opacity: 0,
    });
    trigger("menu:close", { status: "menu closed" });
    callback(false);
  };

  useEffect(() => {
    gsap.from([home, aboutMe, myWork, mySkills, myResume, letsTalk], {
      scrollTrigger: {
        trigger: home as Element,
        toggleActions: "restart reverse restart reverse",
        start: "center 60%",
      },
      x: -200,
      opacity: 0,
      stagger: 0.2,
      delay: 2,
    });

    gsap.from([closeBtn], {
      scrollTrigger: {
        trigger: home as Element,
        toggleActions: "restart reverse restart reverse",
        start: "center 60%",
      },
      x: 200,
      opacity: 0,
      stagger: 0.2,
      delay: 2,
    });
  }, []);

  // social media icons

  // Menu items
  const onTextHover = (item: string) => {
    const options = {
      webkitTextFillColor: "white",
      duration: 0.2,
      ease: "power2.inOut",
    };
    switch (item) {
      case "home":
        setTween(gsap.to(home, options));
        break;
      case "aboutMe":
        setTween(gsap.to(aboutMe, options));
        break;
      case "myWork":
        setTween(gsap.to(myWork, options));
        break;
      case "mySkills":
        setTween(gsap.to(mySkills, options));
        break;
      case "myResume":
        setTween(gsap.to(myResume, options));
        break;
      case "letsTalk":
        setTween(gsap.to(letsTalk, options));
        break;
      default:
        break;
    }
  };

  const onTextLeave = () => {
    tween.reverse();
  };
  

  const handleClick = (menuItem) => {
    console.log(menuItem);
    trigger('scrollTo', { menuItem })
    router.push(`/#${menuItem}`)
  };

  return (
    <NavWrapper ref={(el) => (menuWrap = el)}>
      <NavHeader>
        <Logo />
        <Tilt scale={1.1}>
          <SVG
            ref={(el) => (closeBtn = el)}
            onClick={closeMenu}
            src={CloseMenuIcon}
          />
        </Tilt>
      </NavHeader>
      <MenuWrap>
        <ItemWrap>
          <MenuItem
            ref={(el) => (home = el)}
            onMouseEnter={() => onTextHover("home")}
            onMouseLeave={() => onTextLeave()}
            onClick={closeMenu}
          >
            Home
          </MenuItem>
          <MenuItem
            ref={(el) => (aboutMe = el)}
            onMouseEnter={() => onTextHover("aboutMe")}
            onMouseLeave={() => onTextLeave()}
            onClick={() => handleClick("aboutMe")}
          >
            About Me
          </MenuItem>
          <MenuItem
            ref={(el) => (myWork = el)}
            onMouseEnter={() => onTextHover("myWork")}
            onMouseLeave={() => onTextLeave()}
            onClick={() => handleClick("myWork")}
          >
            My Work
          </MenuItem>
          <MenuItem
            ref={(el) => (mySkills = el)}
            onMouseEnter={() => onTextHover("mySkills")}
            onMouseLeave={() => onTextLeave()}
            onClick={() => handleClick("mySkills")}
          >
            My Skills
          </MenuItem>
          <MenuItem
            ref={(el) => (myResume = el)}
            onMouseEnter={() => onTextHover("myResume")}
            onMouseLeave={() => onTextLeave()}
            onClick={() => handleClick("myResume")}
          >
            My Resume
          </MenuItem>
          <MenuItem
            ref={(el) => (letsTalk = el)}
            onMouseEnter={() => onTextHover("letsTalk")}
            onMouseLeave={() => onTextLeave()}
            onClick={() => handleClick("letsTalk")}
          >
            Let's Talk
          </MenuItem>
        </ItemWrap>
        <SocialMenu />
      </MenuWrap>
    </NavWrapper>
  );
}
