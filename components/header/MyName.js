import styled from "styled-components";
import media from "../../utilities/mediaQueries";

const Kelvin = styled.div`
  color:white;
  font-family: Soulmaze, sans-serif;
  font-size: 8rem;
  margin: 0;
  line-height: 7rem;
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
