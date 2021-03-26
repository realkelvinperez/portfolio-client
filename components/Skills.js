import styled from 'styled-components'
import Heading from "./Heading";
import DesignIcon from '../public/assets/svg/design-icon.svg'
import LearningIcon from '../public/assets/svg/learning-icon.svg'
import FrontEndIcon from '../public/assets/svg/frontend-dev-icon.svg'
import BackEndIcon from '../public/assets/svg/backend-dev-icon.svg'
import media from "../utilities/mediaQueries";
import SectionHeading from "../elements/SectionHeading";

const SkillsWrapper = styled.section`
  margin-top: 4rem;
  margin-bottom: 53rem;
  @media (max-width: ${media.tablet}){
    margin-bottom: 24rem;
  }
  @media (max-width: ${media.tablet}){
    margin-bottom: 12rem;
  }
`
const SkillCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  padding: 0 5rem;
  @media (max-width: ${media.laptop}){
    grid-gap: 2rem;
  }
  @media (max-width: ${media.tablet}){
    display: block;
    width: 50%;
    margin: 0 auto;
    padding: 0;
  }
  
  @media (max-width: ${media.mobileL}){
    width: 75%;
  }
  
`

const SkillCard = styled.div`
  border-radius: 20px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  width: calc(100% - 2.75rem);
  box-sizing: border-box;
  color: #fff;
  display: block;
  overflow: hidden;
  padding: 6px;
  &.first {
    transform: translate(0, -120px);
    @media (max-width: ${media.tablet}){
      transform: translate(0, 0);
    }
  }
  &.second {
    transform: translate(0px, 450px);
    @media (max-width: ${media.tablet}){
      transform: translate(0, 0);
    }
  }
  &.third {
    transform: translate(0px, 180px);
    @media (max-width: ${media.tablet}){
      transform: translate(0, 0);
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(115deg,#AC38D4,#4CF0F0);
    background-size: 50% 100%;
  }
  @media (min-width: ${media.desktop2k}){
  }
  @media (max-width: ${media.laptopL}){
    width: 100%;
  }
  @media (max-width: ${media.tablet}){
    margin-bottom: 3rem;
  }
  @media (max-width: ${media.mobileL}){
  }
`

const SkillCardContent = styled.p`
  font-family: coolvetica,sans-serif;
  color: white;
  font-size: 1.9vw;
  letter-spacing: 2px;
  opacity: 0.8;
  margin: 1rem 0px;
  cursor: pointer;
  @media (max-width: ${media.tablet}){
    font-size: 3vw;
  }
  @media (max-width: ${media.tablet}){
    font-size: 4vw;
  }
  @media (max-width: ${media.mobileL}){
    font-size: 6vw;
  }
`

const SkillCardContentWrap = styled.div`
  padding: 3rem;
  position: relative;
  box-sizing: border-box;
  @media (max-width: ${media.laptop}){
    padding: 2rem;
  }
`

const InnerCardWrap = styled.div`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  height: 100%;
  background: linear-gradient(160.61deg, #283274 0%, rgba(40, 50, 116, 1) 100%);
  border-radius: 15px;
`

const CardBG = styled.img`
  position: absolute;
  top: 25%;
  left: 20%;
  width: 55%;
  z-index: -1;
  &.bigger {
    width: 75%;
    top: 30%;
    left: 15%;
  }
`

const UIList = [
    'Figma',
    'Adobe XD',
    'PhotoShop',
    'Sketch',
]

const LearningList = [
    'AWS',
    'TypeScript',
    'Next.JS',
    'PostgreSQL'
]

const frontendList = [
    'HTML5',
    'CSS3',
    'Bootstrap',
    'Tailwind',
    'JavaScript',
    'jQuery',
    'React.js',
    'Redux (State Mgmt)',
    'Vue.js',
    'SCSS + Less'
]

const backendDevList = [
    'Node.js',
    'Express.js',
    'PHP',
    'Laravel',
    'WordPress',
    'Python',
    'MySQL',
    'MongoDB',
    'Firebase',
    'MelliSearch'
]

export default function Skills() {
    return (
        <>
        <SectionHeading skills>
            Skills
        </SectionHeading>
        <SkillsWrapper>
            <SkillCardWrapper>
               <SkillCard className="first">
                   <InnerCardWrap>
                       <SkillCardContentWrap>
                           <Heading text='UI/UX' />
                           { UIList.map( (item, i) => {
                              return (
                                  <SkillCardContent key={i}>
                                      { item }
                                  </SkillCardContent>
                              )
                           })}
                           <CardBG src={DesignIcon} />
                       </SkillCardContentWrap>
                       <SkillCardContentWrap>
                           <Heading text='Learning' />
                           { LearningList.map( (item , i) => {
                               return (
                                   <SkillCardContent key={i}>
                                       { item }
                                   </SkillCardContent>
                               )
                           })}
                           <CardBG src={LearningIcon} />
                       </SkillCardContentWrap>
                   </InnerCardWrap>
               </SkillCard>
                <SkillCard className="second">
                    <InnerCardWrap>
                        <SkillCardContentWrap>
                            <Heading text='Front-End' />
                            { frontendList.map( (item , i) => {
                                return (
                                    <SkillCardContent key={i}>
                                        { item }
                                    </SkillCardContent>
                                )
                            })}
                            <CardBG className="bigger" src={FrontEndIcon} />
                        </SkillCardContentWrap>
                    </InnerCardWrap>
                </SkillCard>
                <SkillCard className="third">
                    <InnerCardWrap>
                        <SkillCardContentWrap>
                            <Heading text='Backend' />
                            { backendDevList.map( (item, i) => {
                                return (
                                    <SkillCardContent key={i}>
                                        { item }
                                    </SkillCardContent>
                                )
                            })}
                            <CardBG className="bigger" src={BackEndIcon} />
                        </SkillCardContentWrap>
                    </InnerCardWrap>
                </SkillCard>
            </SkillCardWrapper>
        </SkillsWrapper>
        </>
    );
}
