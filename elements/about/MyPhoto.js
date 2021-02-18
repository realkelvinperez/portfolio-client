import styled from "styled-components";
import media from "../../utilities/mediaQueries";

const MyPhoto = styled.img`
  width: 83.33%;
  @media (max-width: ${media.tablet}){
    width: 90%;
  }
  @media (max-width: ${media.mobileL}){
    width: 100%;
  }
`

export default MyPhoto;
