import Container from "../elements/Container";
import styled from "styled-components";
import media from "../utilities/mediaQueries";
import StockProfilePic from '../public/assets/img/stock-profile-picture.png'
import UnderlinedLink from "./UnderlinedLink";

const AboutGrid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 40% 60%;
  margin-bottom: 5rem;
  margin-top: 2rem;
`

// noinspection CssInvalidPropertyValue
const AboutText = styled.div`
  margin: 0;
  font-family: Soulmaze, sans-serif;
  font-size: 8rem;
  -webkit-text-stroke: white 3px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 0px 9px white);
  line-height: 7rem;
  letter-spacing: 1.7rem;
  position: absolute;
  transform: rotate(-90deg) translate(-17vw, -19.2vw);
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

const AboutPicWrapper = styled.div`
    position: relative;
`

const MyPhoto = styled.img`
  width: 83.33%;
`

const AboutTextWrapper = styled.div``

const AboutHeading = styled.div`
  position: relative;
  font-family: coolvetica, sans-serif;
  color: white;
  font-size: 4vw;
  letter-spacing: .4rem;
`

const Underline = styled.div`
  background: linear-gradient(90deg, rgba(113,57,185,1) 0%, rgb(30, 170, 231) 100%);
  position: absolute;
  width: 40%; 
  bottom: 7px;
  left: -0.9rem;
  z-index: -1;
  height: 20px;
  
  @media(min-width: ${media.desktop2k}){
    width: 20vw;
    height: 25px;
    bottom: 2px;
  }
  
  @media (max-width: ${media.tablet}){
    width: 30vw;
  }

  @media (max-width: ${media.mobileL}){
    width: 30vw;
    left: -0.5rem;
    bottom: -3px;
  }
`

const AboutBioWrap = styled.div``

const AboutBioText = styled.p`
  font-family: coolvetica, sans-serif;
  color: white;
  font-size: 1.9vw;
  letter-spacing: 2px;
  opacity: 0.7;
`

export default function About() {
    return (
        <Container>
            <AboutGrid>
                <AboutPicWrapper>
                    <AboutText>
                        About
                    </AboutText>
                    <MyPhoto src={StockProfilePic} />
                </AboutPicWrapper>
               <AboutTextWrapper >
                   <AboutHeading>
                       Hey 👋🏽, i'm Kelvin
                       <Underline />
                   </AboutHeading>
                   <AboutBioWrap>
                       <AboutBioText>
                           Thank you for stopping by. I appreciate your time.
                       </AboutBioText>
                       <AboutBioText>
                           I'm a Professional UI/UX Designer & Full-Stack Web Developer from<UnderlinedLink text='Miami, Fl' />that loves creating digital experiences for businesses that align with there brand
                       </AboutBioText>
                       <AboutBioText>
                           I love collaborating and working with teams and building really dope projects together.
                       </AboutBioText>
                       <AboutBioText>
                           A little bit more about me...Before finding my passion in Tech my interests have been <UnderlinedLink text='Art, ' /><UnderlinedLink text='RPG Games, ' /><UnderlinedLink text='Hip-Hop & Electronic Music, ' /><UnderlinedLink text='Sci-Fi Movies...' />annnnnnnd<UnderlinedLink text='Asian Food 🍱!' />
                       </AboutBioText>
                   </AboutBioWrap>
               </AboutTextWrapper>
            </AboutGrid>
        </Container>
    );
}
