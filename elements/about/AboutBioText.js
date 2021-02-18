import styled from "styled-components";
import media from "../../utilities/mediaQueries";

const AboutBioText = styled.p`
  font-family: coolvetica, sans-serif;
  color: white;
  font-size: 1.9vw;
  letter-spacing: 2px;
  opacity: 0.8;
  @media (max-width: ${media.tablet}){
    font-size: 2.3vw;
  }
  @media (max-width: ${media.mobileL}){
    font-size: 6vw;
  }
`

export default AboutBioText;
