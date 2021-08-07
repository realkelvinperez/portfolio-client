import React, { useRef, useEffect, useState } from "react";
import { Howl } from "howler";
import MiamiMP3 from "../public/assets/sounds/miami-seguals.mp3";
import KelvinPerezPhoto from "../public/assets/img/realkelvinperez-social-1.png"
import Container from "../elements/Container";
import styled from "styled-components";
import UnderlinedLink from "./UnderlinedLink";
import AboutText from "../elements/about/AboutText";
import TitleUnderline from "../elements/TitleUnderline";
import AboutBioText from "../elements/about/AboutBioText";
import AboutHeading from "../elements/about/AboutHeading";
import MyPhoto from "../elements/about/MyPhoto";
import AboutGrid from "../elements/about/AboutGrid";
import { isMobileWindow } from "../utilities/helpers";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type DivRef = React.MutableRefObject<HTMLDivElement> | HTMLDivElement;
type SpanRef = React.MutableRefObject<HTMLSpanElement> | HTMLSpanElement;

const AboutPicWrapper = styled.div`
  position: relative;
`;

const WavyHand = styled.span`
  display: inline-block;
  transition: all 0.3s ease-in-out;
`;

export default function About() {
  const [currentSound, setCurrentSound] = useState<Howl | null>(null);
  const [soundID, setSoundID] = useState<number | null>(null);

  let aboutPhoto: DivRef = useRef(null);
  let heading: DivRef = useRef(null);
  let text1: DivRef = useRef(null);
  let text2: DivRef = useRef(null);
  let text3: DivRef = useRef(null);
  let text4: DivRef = useRef(null);
  let wavyHand: SpanRef = useRef(null);

  useEffect(() => {
    const isMobile = isMobileWindow()
    
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(wavyHand, {
      transform: "rotateZ(0)",
      duration: 0.3,
      ease: "power2.inOut",
    }).to(wavyHand, {
      transform: "rotateZ(20deg)",
      duration: 0.3,
      ease: "power2.inOut",
    });
      gsap.from(aboutPhoto, {
        scrollTrigger: {
          trigger: aboutPhoto as HTMLDivElement,
          toggleActions: "restart reverse restart reverse",
          start: !isMobile ? "20% 80%" : "20% 100%",
          end: !isMobile ? "80% 20%" : "100% 20%",
        },
        x: -100,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
      });
      gsap.from([heading, text1, text2, text3, text4], {
        scrollTrigger: {
          trigger: !isMobile ? aboutPhoto as HTMLDivElement : '.aboutText',
          toggleActions: "restart reverse restart reverse",
          start: "20% 80%",
          end: "80% 20%",
        },
        x: 100,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
        stagger: 0.2,
      });
  }, []);

  const createHowler = (src) => {
    const sound: Howl = new Howl({
      src,
    });
    const soundID: number = sound.play();
    setCurrentSound(sound);
    setSoundID(soundID);
  };

  const Miami = () => {
    createHowler(MiamiMP3);
  };

  const handleStopSound = () => {
    currentSound.stop(soundID);
  };

  return (
      <Container id="aboutMe">
        <AboutGrid>
          <AboutPicWrapper ref={(el) => (aboutPhoto = el)}>
            <AboutText>About</AboutText>
            <MyPhoto src={KelvinPerezPhoto} />
          </AboutPicWrapper>
          <div className="aboutText">
            <AboutHeading ref={(el) => (heading = el)}>
              Hey{" "}
              <WavyHand className="wavy-hand" ref={(el) => (wavyHand = el)}>
                👋🏽
              </WavyHand>
              , I'm Kelvin Perez
              <TitleUnderline />
            </AboutHeading>
            <div>
              <AboutBioText ref={(el) => (text1 = el)}>
                Thank you for stopping by. I appreciate your time.
              </AboutBioText>
              <AboutBioText ref={(el) => (text2 = el)}>
                I'm a UI/UX Designer & Full-Stack Web Developer from{" "}
                <UnderlinedLink
                  miami
                  stopSound={handleStopSound}
                  playSound={Miami}
                  text="🌴 Miami, Fl"
                />{" "}
                that loves creating digital experiences for businesses that
                align with their brand.
              </AboutBioText>
              <AboutBioText ref={(el) => (text3 = el)}>
                I love collaborating and working on teams and building really
                dope projects together.
              </AboutBioText>
              <AboutBioText ref={(el) => (text4 = el)}>
                A bit more about me...Before finding my passion in Tech my
                interests have been <UnderlinedLink text="🖼 Art," />{" "}
                <UnderlinedLink text="⚔️ RPG Games, " />
                <UnderlinedLink text="🎹 Hip-Hop & Electronic Music," />{" "}
                <UnderlinedLink text="👽 Sci-Fi Movies..." />
                annnnnnnd <UnderlinedLink text="🍱 Asian Food !" />
              </AboutBioText>
            </div>
          </div>
        </AboutGrid>
      </Container>
  );
}
