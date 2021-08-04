import React, { useState, useRef, useEffect } from "react";
import media from "../../utilities/mediaQueries";
import styled, { css } from "styled-components";
import EmailIcon from "../../public/assets/svg/email.svg";
import GithubIcon from "../../public/assets/svg/github.svg";
import LinkedinIcon from "../../public/assets/svg/linkedin.svg";
import TwitterIcon from "../../public/assets/svg/twitter.svg";
import YoutubeIcon from "../../public/assets/svg/youtube.svg";
import MyRef from "../../typings/MyRef";
import gsap from "gsap";

const Wrapper = styled.div`
  display: flex;
  padding: 0 4rem;
  margin: 1rem 0;
  box-sizing: border-box;
  justify-content: space-between;
`;

const IconText = styled.div<{ show?: boolean }>`
  font-family: coolvetica, sans-serif;
  font-size: 4vw;
  letter-spacing: 2px;
  margin: 1.5rem 0;
  background: linear-gradient(270deg, #9750f2, #4cf0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  user-select: none;

  ${(props) =>
    props.show &&
    css`
      opacity: 1;
    `}

  @media (max-width: ${media.tablet}) {
    font-size: 2.3vw;
  }
  @media (max-width: ${media.mobileL}) {
    font-size: 6vw;
  }
`;

const SocialWrap = styled.div`
  padding: 0 1rem;
`;

const SocialIcon = styled.img`
  cursor: pointer;
  width: 25%;
`;

export default function SocialMenu() {
  const [isTextShowing, setTextShowing] = useState<boolean>(false);
  const [activeTextName, setActiveTextName] = useState<string>("");

  let linkedinEl: MyRef = useRef(null);
  let twitterEl: MyRef = useRef(null);
  let youtubeEl: MyRef = useRef(null);
  let emailEl: MyRef = useRef(null);
  let githubEl: MyRef = useRef(null);

  useEffect(() => {
    gsap.from([linkedinEl, twitterEl, youtubeEl, emailEl, githubEl], {
      scrollTrigger: {
        trigger: linkedinEl as Element,
        toggleActions: "restart reverse restart reverse",
        start: "center 60%",
      },
      x: 200,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);

  const onHover = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        setTextShowing(true);
        setActiveTextName(iconName);
        break;
      case "twitter":
        setTextShowing(true);
        setActiveTextName(iconName);
        break;
      case "youtube":
        setTextShowing(true);
        setActiveTextName(iconName);
        break;
      case "email":
        setTextShowing(true);
        setActiveTextName(iconName);
        break;
      case "github":
        setTextShowing(true);
        setActiveTextName(iconName);
        break;
      default:
        break;
    }
  };

  const onLeave = (iconName: string) => {
    switch (iconName) {
      case "linkedin":
        setTextShowing(false);
        setActiveTextName(iconName);
        break;
      case "twitter":
        setTextShowing(false);
        setActiveTextName(iconName);
        break;
      case "youtube":
        setTextShowing(false);
        setActiveTextName(iconName);
        break;
      case "email":
        setTextShowing(false);
        setActiveTextName(iconName);
        break;
      case "github":
        setTextShowing(false);
        setActiveTextName(iconName);
        break;
      default:
        break;
    }
  };

  const showText = (iconName) => {
    return isTextShowing && activeTextName === iconName;
  };

  return (
    <SocialWrap>
      <Wrapper>
        <IconText show={showText("linkedin")}>LinkedIn</IconText>
        <SocialIcon
          onClick={() => window.open('https://linkedin.com')}
          onMouseEnter={() => onHover("linkedin")}
          onMouseLeave={() => onLeave("linkedin")}
          ref={(el) => (linkedinEl = el)}
          src={LinkedinIcon}
        />
      </Wrapper>

      <Wrapper>
        <IconText show={showText("twitter")}>Twitter</IconText>
        <SocialIcon
          onMouseEnter={() => onHover("twitter")}
          onMouseLeave={() => onLeave("twitter")}
          onClick={() => window.open('https://twitter.com')}
          ref={(el) => (twitterEl = el)}
          src={TwitterIcon}
        />
      </Wrapper>

      <Wrapper>
        <IconText show={showText("youtube")}>YouTube</IconText>
        <SocialIcon
          src={YoutubeIcon}
          ref={(el) => (youtubeEl = el)}
          onClick={() => window.open('https://youtube.com')}
          onMouseEnter={() => onHover("youtube")}
          onMouseLeave={() => onLeave("youtube")}
        />
      </Wrapper>

      <Wrapper>
        <IconText show={showText("email")}>Email</IconText>
        <SocialIcon
          ref={(el) => (emailEl = el)}
          onClick={() => window.open('https://gmail.com')}
          onMouseEnter={() => onHover("email")}
          onMouseLeave={() => onLeave("email")}
          src={EmailIcon}
        />
      </Wrapper>

      <Wrapper>
        <IconText show={showText("github")}>Github</IconText>
        <SocialIcon
          ref={(el) => (githubEl = el)}
          onClick={() => window.open('https://github.com')}
          onMouseEnter={() => onHover("github")}
          onMouseLeave={() => onLeave("github")}
          src={GithubIcon}
        />
      </Wrapper>
    </SocialWrap>
  );
}
