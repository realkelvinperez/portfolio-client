import styled, { css } from 'styled-components';
import Container from "../elements/Container";
import Number1 from '../public/assets/svg/01.svg'
import Number2 from '../public/assets/svg/02.svg'
import Laptop1 from '../public/assets/img/01-Project-Laptop.png'
import Laptop2 from '../public/assets/img/02-Project-Laptop.png'
import AboutHeading from "../elements/about/AboutHeading";
import TitleUnderline from "../elements/TitleUnderline";
import AboutBioText from "../elements/about/AboutBioText";
import media from "../utilities/mediaQueries";

const AngledBG = styled.div`
  clip-path: polygon(0 15%,100% 0,100% 85%,0% 100%);
  background: linear-gradient(141.17deg, #5B1E71 2%, #298484 100%);
  padding: 30rem 0;
  width: 100%;
  margin-bottom: 4rem;
  @media (max-width: ${media.laptop}){
    padding: 20rem 0;
  }
  @media (max-width: ${media.tablet}){
    padding: 12rem 0;
  }
  @media (max-width: ${media.mobileL}){
    clip-path: polygon(0 7%,100% 0,100% 93%,0% 100%);
  }
`

const NumberImg = styled.img`
  width: 33%;
  @media (max-width: ${media.mobileL}){
    width: 75%;
  }
`

const NumberWrap = styled.div`
  @media (max-width: ${media.mobileL}){
    text-align: center;
  }
  ${props => props.right && css`
    text-align: right;
    @media (max-width: ${media.mobileL}){
      text-align: center;
    }
  `}
`

const LaptopImg = styled.img`
    cursor: pointer;
    width: 60%;
  @media (max-width: ${media.mobileL}){
    width: 100%;
    margin: 2rem 0;
  }
`
const LaptopImgWrap = styled.div`
  ${props => props.right && css`
    text-align: right;
  `}
`
const ProjectWrap = styled.div``

const ProjectText = styled.div`
    width: 50%;
  @media (max-width: ${media.mobileL}){
    width: 100%;
    margin: 2rem 0;
  }
  ${props => props.right && css`
    margin: 0 0 0 auto;
  `}
`

export default function Projects() {
    return (
        <AngledBG>
            <Container>
                <ProjectWrap>
                    <NumberWrap right>
                        <NumberImg src={Number1} />
                    </NumberWrap>
                    <ProjectText>
                        <AboutHeading>
                            Bizy Bug Tracker
                            <TitleUnderline />
                        </AboutHeading>
                        <AboutBioText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, dolorem et? A delectus fuga, nam natus necessitatibus pariatur quod. Accusamus alias dolore officia reprehenderit similique?
                        </AboutBioText>
                    </ProjectText>
                    <LaptopImgWrap right>
                        <LaptopImg src={Laptop1}/>
                    </LaptopImgWrap>
                </ProjectWrap>
                <ProjectWrap>
                    <NumberWrap>
                        <NumberImg src={Number2} />
                    </NumberWrap>
                    <ProjectText right>
                        <AboutHeading>
                                Better Budgets
                            <TitleUnderline />
                        </AboutHeading>
                        <AboutBioText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, dolorem et? A delectus fuga, nam natus necessitatibus pariatur quod. Accusamus alias dolore officia reprehenderit similique?
                        </AboutBioText>
                    </ProjectText>
                    <LaptopImg src={Laptop2}/>
                </ProjectWrap>
            </Container>
        </AngledBG>
    );
}
