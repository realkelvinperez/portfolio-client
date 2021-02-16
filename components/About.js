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
  @media (max-width: ${media.mobileL}){
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`

// noinspection CssInvalidPropertyValue
const AboutText = styled.div`
  margin: 0;
  font-family: Soulmaze, sans-serif;
  font-size: 7.4vw;
  -webkit-text-stroke: white 3px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 0px 9px white);
  line-height: 7rem;
  letter-spacing: 1.7rem;
  position: absolute;
  transform: rotate(-90deg) translate(-17vw, -19.2vw);
  @media (min-width: ${media.desktop2k}){
    font-size: 8.4vw;
    -webkit-text-stroke: white 6px;
    transform: rotate(-90deg) translate(-19.2vw,-19.6vw);
  }
  @media (max-width: ${media.laptopL}){
    transform: rotate(-90deg) translate(-17vw,-20vw);
  }
  @media (max-width: ${media.laptop}){
    line-height: 4rem;
    font-size: 8.5vw;
    letter-spacing: 0.8rem;
    transform: rotate(-90deg) translate(-17vw,-21vw);
  }
  @media (max-width: ${media.tablet}){
    -webkit-text-stroke: white 2px;
  }
  @media (max-width: ${media.mobileL}){
    font-size: 17.5vw;
    transform: rotate(0deg) translate(0,-31px);
  }
  
`

const AboutPicWrapper = styled.div`
    position: relative;
`

const MyPhoto = styled.img`
  width: 83.33%;
  @media (max-width: ${media.tablet}){
    width: 90%;
  }
  @media (max-width: ${media.mobileL}){
    width: 100%;
  }
`

const AboutTextWrapper = styled.div``

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

const TitleUnderline = styled.div`
  background: linear-gradient(90deg, rgba(113,57,185,1) 0%, rgb(30, 170, 231) 100%);
  position: absolute;
  width: 40%; 
  bottom: 7px;
  left: -0.9rem;
  z-index: -1;
  height: 20px;
  
  @media(min-width: ${media.desktop2k}){
    width: 20vw;
    bottom: 2px;
    height: 60px;
  }
  
  @media (max-width: ${media.tablet}){
    width: 30vw;
  }

  @media (max-width: ${media.mobileL}){
    width: 60%;
    left: -0.5rem;
    bottom: 0px;
    height: 17px;
  }
`

const AboutBioWrap = styled.div``

const AboutBioText = styled.p`
  font-family: coolvetica, sans-serif;
  color: white;
  font-size: 1.9vw;
  letter-spacing: 2px;
  opacity: 0.7;
  @media (max-width: ${media.tablet}){
    font-size: 2.3vw;
  }
  @media (max-width: ${media.mobileL}){
    font-size: 6vw;
  }
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
                       <TitleUnderline />
                   </AboutHeading>
                   <AboutBioWrap>
                       <AboutBioText>
                           Thank you for stopping by. I appreciate your time.
                       </AboutBioText>
                       <AboutBioText>
                           I'm a Professional UI/UX Designer & Full-Stack Web Developer from <UnderlinedLink text='Miami, Fl' /> that loves creating digital experiences for businesses that align with there brand
                       </AboutBioText>
                       <AboutBioText>
                           I love collaborating and working with teams and building really dope projects together.
                       </AboutBioText>
                       <AboutBioText>
                           A little bit more about me...Before finding my passion in Tech my interests have been <UnderlinedLink text='Art,' /> <UnderlinedLink text='RPG Games, ' /><UnderlinedLink text='Hip-Hop & Electronic Music,' /> <UnderlinedLink text='Sci-Fi Movies...' />annnnnnnd <UnderlinedLink text='Asian Food 🍱!' />
                       </AboutBioText>
                   </AboutBioWrap>
               </AboutTextWrapper>
            </AboutGrid>
        </Container>
    );
}
