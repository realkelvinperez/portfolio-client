import styled from "styled-components";
import media from "../../utilities/mediaQueries";

const AboutHeading = styled.div`
  position: relative;
  font-family: coolvetica, sans-serif;
  color: white;
  font-size: 4vw;
  letter-spacing: .4rem;

  @media (max-width: ${media.mobileL}){
    font-size: 7.7vw;
    letter-spacing: 0.3rem;
  }
`
export default AboutHeading;
