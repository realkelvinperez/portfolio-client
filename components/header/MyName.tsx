import { useRef, useEffect } from "react";
import styled from "styled-components";
import media from "../../utilities/mediaQueries";
import gsap from "gsap";
import Tilt from "react-parallax-tilt";
import MyRef from "../../typings/MyRef";

const Kelvin = styled.div`
  color: white;
  font-family: Soulmaze, sans-serif;
  font-size: 8rem;
  margin: 0;
  line-height: 7rem;
  cursor: pointer;
  @media (min-width: ${media.desktop2k}) {
    font-size: 8vw;
    line-height: 11vw;
  }
  @media (max-width: ${media.tablet}) {
    font-size: 13vw;
    line-height: 1;
  }
`;

const Perez = styled.div`
  margin: 0;
  font-family: Soulmaze, sans-serif;
  font-size: 8rem;
  -webkit-text-stroke: 3px white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 0px 9px white);
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

export default function MyName() {

  let kelvin: MyRef = useRef(null);
  let perez: MyRef = useRef(null);

  useEffect(() => {
      gsap.from([kelvin, perez], {
        x: -100,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
        stagger: 0.2,
      });
  }, []);

  return (
    <div>
      <Tilt scale={0.9} transitionSpeed={2500}>
        <Kelvin ref={(el) => (kelvin = el)}>Kelvin</Kelvin>
      </Tilt>
      <Tilt scale={0.9} transitionSpeed={2500}>
        <Perez ref={(el) => (perez = el)}>Perez</Perez>
      </Tilt>
    </div>
  );
}
