import Container from "../elements/Container";
import styled from "styled-components";
import StockProfilePic from '../public/assets/img/stock-profile-picture.png'
import UnderlinedLink from "./UnderlinedLink";
import AboutText from "../elements/about/AboutText";
import TitleUnderline from "../elements/TitleUnderline";
import AboutBioText from "../elements/about/AboutBioText";
import AboutHeading from "../elements/about/AboutHeading";
import MyPhoto from "../elements/about/MyPhoto";
import AboutGrid from "../elements/about/AboutGrid";

const AboutPicWrapper = styled.div`
    position: relative;
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
               <div>
                   <AboutHeading>
                       Hey 👋🏽, i'm Kelvin
                       <TitleUnderline />
                   </AboutHeading>
                   <div>
                       <AboutBioText>
                           Thank you for stopping by. I appreciate your time.
                       </AboutBioText>
                       <AboutBioText>
                           I'm a UI/UX Designer & Full-Stack Web Developer from <UnderlinedLink text='Miami, Fl' /> that loves creating digital experiences for businesses that align with their brand
                       </AboutBioText>
                       <AboutBioText>
                           I love collaborating and working with teams and building really dope projects together.
                       </AboutBioText>
                       <AboutBioText>
                           A bit more about me...Before finding my passion in Tech my interests have been <UnderlinedLink text='Art,' /> <UnderlinedLink text='RPG Games, ' /><UnderlinedLink text='Hip-Hop & Electronic Music,' /> <UnderlinedLink text='Sci-Fi Movies...' />annnnnnnd <UnderlinedLink text='Asian Food 🍱!' />
                       </AboutBioText>
                   </div>
               </div>
            </AboutGrid>
        </Container>
    );
}
