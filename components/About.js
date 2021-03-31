import { useRef, useEffect, useContext, useState } from 'react'
import { Howl} from 'howler'
import MiamiMP3 from '../public/assets/sounds/miami-seguals.mp3'
import Container from "../elements/Container";
import styled from "styled-components";
import StockProfilePic from '../public/assets/img/stock-profile-picture.png'
import UnderlinedLink from "./UnderlinedLink";
import AboutText from "../elements/about/AboutText";
import TitleUnderline from "../elements/TitleUnderline";
import AboutBioText from "../elements/about/AboutBioText";
import AboutHeading from "../elements/about/AboutHeading";
import MyPhoto from "../elements/about/MyPhoto";
import AboutGrid from "../elements/about/AboutGrid";
import LoginContext from "../context/LoginContext";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

const AboutPicWrapper = styled.div`
    position: relative;
`

const WavyHand = styled.span`
  display: inline-block;
  transition: all 0.3 ease-in-out,
`

export default function About() {
    const { isLoading } = useContext(LoginContext)
    const [currentSound, setCurrentSound] = useState(null)
    const [soundID, setSoundID] = useState(null)

    let aboutPhoto = useRef(null);
    let heading = useRef(null);
    let text1 = useRef(null);
    let text2 = useRef(null);
    let text3 = useRef(null);
    let text4 = useRef(null);
    let wavyHand = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({repeat: -1, yoyo: true })
        tl.to(wavyHand,{
            transform: 'rotateZ(0)',
            duration: .3,
            ease: 'power2.inOut'
        }).to(wavyHand,{
            transform: 'rotateZ(20deg)',
            duration: .3,
            ease: 'power2.inOut'
        })
        if(!isLoading){
            gsap.from(
                aboutPhoto, {
                    scrollTrigger:{
                        trigger: aboutPhoto,
                        toggleActions: 'restart reverse restart reverse',
                        start: '20% 80%',
                        end: '80% 20%'
                    },
                    x: -100,
                    opacity: 0,
                    ease: 'power2.inOut',
                    duration: 1
                })
            gsap.from(
                [ heading, text1, text2, text3, text4 ], {
                    scrollTrigger:{
                        trigger: aboutPhoto,
                        toggleActions: 'restart reverse restart reverse',
                        start: '20% 80%',
                        end: '80% 20%'
                    },
                    x: 100,
                    opacity: 0,
                    ease: 'power2.inOut',
                    duration: 1,
                    stagger: .2
                })
        }
    },[isLoading])


    const createHowler = (src) => {
        const sound = new Howl({
            src
        });
        const soundID = sound.play();
        setCurrentSound(sound)
        setSoundID(soundID)
    }

    const Miami = () => {
        createHowler(MiamiMP3)
    }

    const handleStopSound = () => {
       currentSound.stop(soundID)
    }


    return (
        <Container>
            <AboutGrid>
                <AboutPicWrapper ref={el => aboutPhoto = el}>
                    <AboutText>
                        About
                    </AboutText>
                    <MyPhoto src={StockProfilePic} />
                </AboutPicWrapper>
               <div>
                   <AboutHeading ref={el => heading = el}>
                       Hey <WavyHand className="wavy-hand" ref={el => wavyHand = el}>👋🏽</WavyHand>, I'm Kelvin Perez
                       <TitleUnderline />
                   </AboutHeading>
                   <div>
                       <AboutBioText ref={el => text1 = el}>
                           Thank you for stopping by. I appreciate your time.
                       </AboutBioText>
                       <AboutBioText ref={el => text2 = el}>
                           I'm a UI/UX Designer & Full-Stack Web Developer from <UnderlinedLink src={StockProfilePic} miami stopSound={handleStopSound} playSound={Miami} text='🌴 Miami, Fl' /> that loves creating digital experiences for businesses that align with their brand.
                       </AboutBioText>
                       <AboutBioText ref={el => text3 = el}>
                           I love collaborating and working on teams and building really dope projects together.
                       </AboutBioText>
                       <AboutBioText ref={el => text4 = el}>
                           A bit more about me...Before finding my passion in Tech my interests have been <UnderlinedLink text='🖼 Art,' /> <UnderlinedLink text='⚔️ RPG Games, ' /><UnderlinedLink text='🎹 Hip-Hop & Electronic Music,' /> <UnderlinedLink text='👽 Sci-Fi Movies...' />annnnnnnd <UnderlinedLink text='🍱 Asian Food !' />
                       </AboutBioText>
                   </div>
               </div>
            </AboutGrid>
        </Container>
    );
}
