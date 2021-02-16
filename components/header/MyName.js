import styled from "styled-components";
import media from "../../utilities/mediaQueries";

const Kelvin = styled.div`
  color:white;
  font-family: Soulmaze, sans-serif;
  font-size: 8rem;
  margin: 0;
  line-height: 7rem;
`

const Perez = styled.div`
  margin: 0;
  font-family: Soulmaze, sans-serif;
  font-size: 8rem;
  -webkit-text-stroke: white 2px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 0px 9px white);
  line-height: 7rem;
  letter-spacing: 1.7rem;
  @media (min-width: ${media.tablet}){
    -webkit-text-stroke: white 3px;
  }
`

export default function MyName() {
    return (
        <>
            <Kelvin>
                Kelvin
            </Kelvin>
            <Perez>
                Perez
            </Perez>
        </>
);
}
