import { useState, useEffect, useMemo, createContext } from 'react'
import Head from 'next/head'
import styled, { createGlobalStyle, css } from 'styled-components'
import Vanta from "../components/Vanta";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Quote from "../components/Quote";
import LetsTalk from "../components/LetsTalk";
import TheEnd from "../components/TheEnd";
import Footer from "../components/FooterText";
import Loading from "../components/Loading";
import ScrollProgress from "../components/ScrollProgress";
import { on } from "../utilities/events";
import LoginContext from "../context/LoginContext";
import Resume from "../components/resume";

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

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const loadingState = useMemo(() => ({isLoading, setIsLoading}), [isLoading, setIsLoading])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0)
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
                {/* Projects Section */}
                <Projects/>
                {/* My Skills Section */}
                <Skills/>
                {/* Quote Section */}
                <Quote/>
                {/* My Resume Section */}
                <Resume/>
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
