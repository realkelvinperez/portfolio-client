import { useContext, useRef, useEffect } from 'react';
import styled from "styled-components";
import media from "../../utilities/mediaQueries";
import LoginContext from "../../context/LoginContext";
import { gsap } from "gsap";
import Tilt from "react-parallax-tilt";

const Kelvin = styled.div`
  color:white;
  font-family: Soulmaze, sans-serif;
  font-size: 8rem;
  margin: 0;
  line-height: 7rem;
  cursor: pointer;
  @media (min-width: ${media.desktop2k}){
    font-size: 8vw;
    line-height: 11vw;
  }
  @media (max-width: ${media.tablet}){
    font-size: 13vw;
    line-height: 1;
  }
`

const Perez = styled.div`
  margin: 0;
  font-family: Soulmaze, sans-serif;
  font-size: 8rem;
  -webkit-text-stroke: white 3px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 0px 9px white);
  line-height: 7rem;
  letter-spacing: 1.7rem;
  cursor: pointer;
  
  @media (min-width: ${media.desktop2k}){
    font-size: 8vw;
    margin-bottom: 5rem;
  }
  @media (max-width: ${media.tablet}){
    -webkit-text-stroke: white 2px;
    line-height: 1;
    font-size: 13vw;
    letter-spacing: 0.7rem;
  }
`

export default function MyName() {
    const { isLoading } = useContext(LoginContext)
    let kelvin = useRef(null);
    let perez = useRef(null)
    useEffect(() => {
        console.log({ isLoading })
        if(!isLoading){
            gsap.from(
                [kelvin, perez], {
                    x: -100,
                    opacity: 0,
                    ease: 'power2.inOut',
                    duration: 1,
                    stagger: .2
                })
        }
    },[isLoading])

    return (
        <div>
            <Tilt scale={0.9} transitionSpeed={2500}>
                <Kelvin ref={el => kelvin = el}>
                    Kelvin
                </Kelvin>
            </Tilt>
            <Tilt scale={0.9} transitionSpeed={2500}>
                <Perez ref={el => perez = el}>
                    Perez
                </Perez>
            </Tilt>
        </div>
);
}
