import styled from "styled-components";
import media from "../../utilities/mediaQueries";

const AboutGrid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 40% 60%;
  margin-bottom: 5rem;
  margin-top: 2rem;
  @media (max-width: ${media.mobileL}){
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`
export default AboutGrid;
