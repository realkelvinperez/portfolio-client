import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import Vanta from "../components/Vanta";
import media from "../utilities/mediaQueries";
import About from "../components/About";
import Projects from "../components/Projects";
import SectionHeading from "../elements/SectionHeading";
import Skills from "../components/Skills";
import Quote from "../components/Quote";
import Resume from "../components/resume";
import LetsTalk from "../components/LetsTalk";
import Footer from "../components/FooterText";

const HeaderFlexWrap = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ScrollProgress = styled.div`
    width: 50%;
    height: 13px;
    background: linear-gradient(270deg, rgba(113,57,185,1) 0%, rgb(30, 170, 231) 100%);
    position: fixed;
    top: 0;
    left: 0;
    z-index:9999;
  @media (min-width: ${media.desktop2k}){
    height: .8vw;
  }
`

const MyGlobalStyle = createGlobalStyle`
  html {
    background: #141A43;
  }
  body{ margin: 0; }
`;

const ResumeWrapper = styled.div`
  position: relative;
`

const ResumeLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  //background: red;
  width: 10px;
  height: 94%;
  background: linear-gradient(180deg,rgba(172,56,212,0) 0%,rgba(172,56,212,1) 20%,rgba(76,240,240,1) 80%,rgba(76,240,240,0) 100%);
  transform: translate(-50%, 3%);
  z-index: -1;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kelvin Perez Web Developer Portfolio | UI/UX & Full-Stack | Miami, FL | Figma PHP Laravel React SQL</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <MyGlobalStyle />
        {/* Hero Section */}
        <HeaderFlexWrap>
            <Vanta />
        </HeaderFlexWrap>
        {/* About Me Section */}
        <About />
        {/* My Work Section */}
        <SectionHeading work>
          My Work
        </SectionHeading>
        <Projects />
        {/* My Skills Section */}
        <SectionHeading skills>
            My Skills
        </SectionHeading>
        <Skills />
        {/* Quote Section */}
        <Quote />
        {/* My Resume Section */}
        <ResumeWrapper>
            <SectionHeading>
                My Resume
            </SectionHeading>
            <Resume />
            <ResumeLine />
        </ResumeWrapper>
        {/* Let's Talk Section */}
        <LetsTalk />
        <SectionHeading>
            The End
        </SectionHeading>
        <Footer />
        <ScrollProgress />
    </div>
  )
}
