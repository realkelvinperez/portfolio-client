import styled, { css } from 'styled-components';
import Container from "../elements/Container";
import Number1 from '../public/assets/svg/01.svg'
import Number2 from '../public/assets/svg/02.svg'
import Laptop1 from '../public/assets/img/01-Project-Laptop.png'
import Laptop2 from '../public/assets/img/02-Project-Laptop.png'
import AboutHeading from "../elements/about/AboutHeading";
import TitleUnderline from "../elements/TitleUnderline";
import AboutBioText from "../elements/about/AboutBioText";
import media from "../utilities/mediaQueries";
import SectionHeading from "../elements/SectionHeading";
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

const AngledBG = styled.div`
  clip-path: polygon(0 15%,100% 0,100% 85%,0% 100%);
  background: linear-gradient(141.17deg, #5B1E71 2%, #298484 100%);
  padding: 30rem 0;
  width: 100%;
  margin-bottom: 4rem;
  @media (max-width: ${media.laptop}){
    padding: 20rem 0;
  }
  @media (max-width: ${media.tablet}){
    padding: 12rem 0;
  }
  @media (max-width: ${media.mobileL}){
    clip-path: polygon(0 7%,100% 0,100% 93%,0% 100%);
  }
`

const NumberImg = styled.img`
  width: 33%;
  @media (max-width: ${media.mobileL}){
    width: 75%;
  }
`

const NumberWrap = styled.div`
  @media (max-width: ${media.mobileL}){
    text-align: center;
  }
  ${props => props.right && css`
    text-align: right;
    @media (max-width: ${media.mobileL}){
      text-align: center;
    }
  `}
`

const LaptopImg = styled.img`
    cursor: pointer;
    width: 60%;
  @media (max-width: ${media.mobileL}){
    width: 100%;
    margin: 2rem 0;
  }
`
const LaptopImgWrap = styled.div`
  ${props => props.right && css`
    text-align: right;
  `}
`
const ProjectWrap = styled.div``

const ProjectText = styled.div`
    width: 50%;
  @media (max-width: ${media.mobileL}){
    width: 100%;
    margin: 2rem 0;
  }
  ${props => props.right && css`
    margin: 0 0 0 auto;
  `}
`

export default function Projects() {
    let title = useRef(null);

    let workSection = useRef(null);

    let project1 = useRef(null)
    let number1 = useRef(null)
    let laptop1 = useRef(null)
    let textHeading1 = useRef(null)
    let textBody1 = useRef(null)

    let project2 = useRef(null)
    let number2 = useRef(null)
    let laptop2 = useRef(null)
    let textHeading2 = useRef(null)
    let textBody2 = useRef(null)

    useEffect(() => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                toggleActions: 'restart reverse restart reverse',
                start: 'top 80%',
                end: '500px 20%',
            },
            y: -200,
            opacity: 0
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: project1,
                toggleActions: 'restart reverse restart reverse',
                start: 'top 80%',
                end: 'center 0px',
            }
        })

        tl
            .from(number1, {
                opacity: 0,
                x: 100
            })
            .from([textHeading1, textBody1], {
                opacity: 0,
                x: -100,
                stagger: .2,
            })
            .from([laptop1], {
                opacity: 0,
                x: 100,
            })

        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: project2,
                toggleActions: 'restart reverse restart reverse',
                start: 'top 80%',
                end: 'center 0px',
            }
        })

        t2
            .from(number2, {
                opacity: 0,
                x: -100
            })
            .from([textHeading2, textBody2], {
                opacity: 0,
                x: 100,
                stagger: .2,
            })
            .from([laptop2], {
                opacity: 0,
                x: -100,
            })
    }, [])


    return (
        <>
        <SectionHeading ref={el => title = el} work>
            Work
        </SectionHeading>
        <AngledBG ref={el => workSection = el}>
            <Container>
                <ProjectWrap ref={el => project1 = el}>
                    <NumberWrap right>
                        <NumberImg ref={el => number1 = el} src={Number1} />
                    </NumberWrap>
                    <ProjectText>
                        <AboutHeading ref={el => textHeading1 = el}>
                            ViViFi App
                            <TitleUnderline />
                        </AboutHeading>
                        <AboutBioText ref={el => textBody1 = el}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, dolorem et? A delectus fuga, nam natus necessitatibus pariatur quod. Accusamus alias dolore officia reprehenderit similique?
                        </AboutBioText>
                    </ProjectText>
                    <LaptopImgWrap right>
                        <LaptopImg ref={el => laptop1 = el} src={Laptop1}/>
                    </LaptopImgWrap>
                </ProjectWrap>
                <ProjectWrap ref={el => project2 = el}>
                    <NumberWrap>
                        <NumberImg ref={el => number2 = el} src={Number2} />
                    </NumberWrap>
                    <ProjectText right>
                        <AboutHeading ref={el => textHeading2 = el}>
                                Financial Freedom
                            <TitleUnderline />
                        </AboutHeading>
                        <AboutBioText ref={el => textBody2 = el}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, dolorem et? A delectus fuga, nam natus necessitatibus pariatur quod. Accusamus alias dolore officia reprehenderit similique?
                        </AboutBioText>
                    </ProjectText>
                    <LaptopImg ref={el => laptop2 = el} src={Laptop2}/>
                </ProjectWrap>
            </Container>
        </AngledBG>
        </>
    );
}
