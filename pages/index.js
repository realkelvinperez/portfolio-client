import { useState, useEffect, useMemo, createContext } from 'react'
import Head from 'next/head'
import styled, { createGlobalStyle, css } from 'styled-components'
import Vanta from "../components/Vanta";
import About from "../components/About";
import Projects from "../components/Projects";
import SectionHeading from "../elements/SectionHeading";
import Skills from "../components/Skills";
import Quote from "../components/Quote";
import Resume from "../components/resume";
import LetsTalk from "../components/LetsTalk";
import TheEnd from "../components/TheEnd";
import Footer from "../components/FooterText";
import Loading from "../components/Loading";
import ScrollProgress from "../components/ScrollProgress";
import { on } from "../utilities/events";
import LoginContext from "../context/LoginContext";

const HeaderFlexWrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MyGlobalStyle = createGlobalStyle`
  html {
    background: #141A43;
    overflow-x: hidden;
    ${props => props.isLoading && css`
      overflow-y: hidden;
    `}
  }


  body {
    margin: 0;
  }
`;

const ResumeWrapper = styled.div`
  position: relative;
`

const ResumeLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 10px;
  height: 94%;
  background: linear-gradient(180deg, rgba(172, 56, 212, 0) 0%, rgba(172, 56, 212, 1) 20%, rgba(76, 240, 240, 1) 80%, rgba(76, 240, 240, 0) 100%);
  transform: translate(-50%, 3%);
  z-index: -1;
`

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const loadingState = useMemo(() => ({isLoading, setIsLoading}), [isLoading, setIsLoading])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log('window is defined')
            on('progressBar:done', (event) => {
                setIsLoading(false)
                console.log('Progress bar done', { event })
            })
        }
    }, [])

    return (
        <LoginContext.Provider value={loadingState}>
            <div>
                <Head>
                    <title>Kelvin Perez Web Developer Portfolio | UI/UX & Full-Stack | Miami, FL | Figma PHP Laravel React
                        SQL</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <MyGlobalStyle isLoading={isLoading}/>
                {/* Hero Section */}
                <HeaderFlexWrap>
                    <Vanta/>
                </HeaderFlexWrap>
                {/* About Me Section */}
                <About/>
                {/* My Work Section */}
                <SectionHeading work>
                    Work
                </SectionHeading>
                <Projects/>
                {/* My Skills Section */}
                <SectionHeading skills>
                    Skills
                </SectionHeading>
                <Skills/>
                {/* Quote Section */}
                <Quote/>
                {/* My Resume Section */}
                <ResumeWrapper>
                    <SectionHeading>
                        Resume
                    </SectionHeading>
                    <Resume/>
                    <ResumeLine/>
                </ResumeWrapper>
                {/* Let's Talk Section */}
                <LetsTalk/>
                {/* The End Section */}
                <TheEnd/>
                {/* Footer Section */}
                <Footer/>
                {/* Top Progress Bar */}
                <ScrollProgress isLoading={isLoading} />
                {/* first Visit Loading Animation */}
                <Loading isLoading={isLoading}/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"/>
            </div>
        </LoginContext.Provider>
    )
}
