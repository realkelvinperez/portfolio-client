import styled from "styled-components";
import media from "../../utilities/mediaQueries";
import { useRef, useEffect, useContext } from 'react'
import LoginContext from "../../context/LoginContext";
import { gsap } from 'gsap';

const ScrollDownWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`

const ScrollDownIcon = styled.div`
 margin: 0 1rem; 
`

const ScrollDownText = styled.text`
  color: white;
  font-family: Coolvetica, sans-serif;
  letter-spacing: 0.2rem;
  font-size: 1.3rem;
  opacity: 0.4;
  @media (min-width: ${media.desktop2k}){
    font-size: 1.5vw;
  }
`

const ScrollDownSVG = styled.svg`
  @media (min-width: ${media.desktop2k}){
    width: 5vw;
    height: 6vw;
  }
`

export default function ScrollDown() {

    const { isLoading } = useContext(LoginContext)

    let scrollText = useRef(null);
    let downText = useRef(null);
    let scroll = useRef(null);
    let scrollBall = useRef(null)

    useEffect(() => {
        console.log({ isLoading })
        if(!isLoading){
            gsap.from(
                [scrollText, downText, scroll], {
                    y: -150,
                    opacity: 0,
                    ease: 'power2.inOut',
                    duration: 1.4,
                    stagger: .2
                })
            gsap.fromTo(
                scrollBall,
                {
                    opacity: 1,
                    ease: 'power2.inOut',
                    duration: 1,
                },
                {
                    ease: 'power2.inOut',
                    opacity: 0,
                    duration: 1,
                    y: 50,
                    repeat: -1,
                },
        );
        }
    },[isLoading])

    return (
        <ScrollDownWrap>
            <ScrollDownText ref={el => scrollText = el}>
                Scroll
            </ScrollDownText>
            <ScrollDownIcon>
                <ScrollDownSVG ref={el => scroll = el} width="40" height="85" viewBox="0 0 40 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenOdd" clipRule="evenOdd" d="M0 19.5591C0 8.7569 8.95431 0 20 0C31.0457 0 40 8.75691 40 19.5591V65.4409C40 76.2431 31.0457 85 20 85C8.95431 85 0 76.2431 0 65.4409V19.5591ZM20 3.00909C10.6536 3.00909 3.07692 10.4188 3.07692 19.5591V65.4409C3.07692 74.5812 10.6536 81.9909 20 81.9909C29.3464 81.9909 36.9231 74.5812 36.9231 65.4409V19.5591C36.9231 10.4188 29.3464 3.00909 20 3.00909Z" fill="url(#paint0_linear)"/>
                    <rect ref={el => scrollBall = el} className="scroll-down-ball" x="10.5" y="9.46326" width="20" height="20" rx="10" fill="url(#paint1_linear)"/>
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
                </ScrollDownSVG>
            </ScrollDownIcon>
            <ScrollDownText ref={el => downText = el}>
                Down
            </ScrollDownText>
        </ScrollDownWrap>
    );
}
