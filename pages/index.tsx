import { useState, useEffect, useMemo, useRef } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import styled, { createGlobalStyle, css } from "styled-components";
import Loading from "../components/Loading";
import ScrollProgress from "../components/ScrollProgress";
import { on } from "../utilities/events";
import LoginContext from "../context/LoginContext";
import { hotjar } from 'react-hotjar';
import ReactGA from 'react-ga';




const Vanta = dynamic(() => import("../components/Vanta"));
const About = dynamic(() => import("../components/About"));
const Resume = dynamic(() => import("../components/Resume"));
const Projects = dynamic(() => import("../components/Projects"));
const Skills = dynamic(() => import("../components/Skills"));
const Quote = dynamic(() => import("../components/Quote"));
const LetsTalk = dynamic(() => import("../components/LetsTalk"));
const TheEnd = dynamic(() => import("../components/TheEnd"));
const Footer = dynamic(() => import("../components/FooterText"));

const HeaderFlexWrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface StyleProps {
  isLoading: boolean;
  isOverflow: boolean;
}

const MyGlobalStyle = createGlobalStyle<StyleProps>`

    html {
        scroll-behavior: smooth;
    }

    ${(props) =>
      props.isLoading &&
      css`
        html {
          overflow-y: hidden;
        }
      `}

    ${(props) =>
      props.isOverflow &&
      css`
        html {
          overflow-y: hidden;
        }
      `}

`;

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOverflow, setIsOverflow] = useState<boolean>(false);
  let aboutEl = useRef(null);

  const loadingState = useMemo(
    () => ({ isLoading, setIsLoading }),
    [isLoading, setIsLoading]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);

      // Hotjar Analytics
      hotjar.initialize(2540489, 6);
      hotjar.identify('USER_ID', { userProperty: 'value' });

      // Google Analytics  
      ReactGA.initialize('G-V7MWYPNM0E1');
      ReactGA.pageview(window.location.pathname + window.location.search);
      
      on("progressBar:done", (payload) => {
        console.log({ payload });
        setIsLoading(false);
      });
      on("menu:open", (payload) => {
        // add Overflow-y hidden => setLoading to true
        console.log({ payload });
        setIsOverflow(true);
      });
      on("menu:close", (payload) => {
        // Remove Overflow-y hidden => setLoading to false
        console.log("close menu", { payload });
        setIsOverflow(false);
      });
      on("scrollTo", (payload) => {
        setIsOverflow(false);
        console.log(aboutEl, payload);
      });
    }
  }, []);

  return (
    <LoginContext.Provider value={loadingState}>
      <div>
        <Head>
          <title>
            Kelvin Perez Full Stack Web Developer Portfolio | UI/UX & Full-Stack | Miami,
            FL | Figma, React, TypeScript, NodeJS, PostgreSQL{" "}
          </title>
          <link rel="icon" href="/favicon.ico" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#603cba" />
          <meta name="theme-color" content="#14193B"></meta>
          <meta charSet="utf-8" />
          <title>Kelvin Perez Full Stack Web Developer Portfolio | UI/UX & Full-Stack | Miami, FL | Figma, React, TypeScript, NodeJS, PostgreSQL</title>
          <meta name="description" content="With over 5+ years of experience i love helping brands and companies build products that align with there vision and users." />
          <meta name="image" content="https://i.ibb.co/J3fq36P/Screen-Shot-2021-08-05-at-5-51-38-PM.png" />
          <meta itemProp="name" content="Kelvin Perez Full Stack Web Developer Portfolio | UI/UX & Full-Stack | Miami, FL | Figma, React, TypeScript, NodeJS, PostgreSQL" />
          <meta itemProp="description" content="With over 5+ years of experience i love helping brands and companies build products that align with there vision and users." />
          <meta itemProp="image" content="https://i.ibb.co/J3fq36P/Screen-Shot-2021-08-05-at-5-51-38-PM.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Kelvin Perez Full Stack Web Developer Portfolio | UI/UX & Full-Stack | Miami, FL | Figma, React, TypeScript, NodeJS, PostgreSQL" />
          <meta name="twitter:description" content="With over 5+ years of experience i love helping brands and companies build products that align with there vision and users." />
          <meta name="twitter:site" content="@realkelvinperez" />
          <meta name="twitter:creator" content="@realkelvinperez" />
          <meta name="twitter:image:src" content="https://i.ibb.co/J3fq36P/Screen-Shot-2021-08-05-at-5-51-38-PM.png" />
          <meta name="og:title" content="Kelvin Perez Full Stack Web Developer Portfolio | UI/UX & Full-Stack | Miami, FL | Figma, React, TypeScript, NodeJS, PostgreSQL" />
          <meta name="og:description" content="With over 5+ years of experience i love helping brands and companies build products that align with there vision and users." />
          <meta name="og:image" content="https://i.ibb.co/J3fq36P/Screen-Shot-2021-08-05-at-5-51-38-PM.png" />
          <meta name="og:url" content="https://kelvinperez.com" />
          <meta name="og:site_name" content="Kelvin Perez Full Stack Web Developer Portfolio | UI/UX & Full-Stack | Miami, FL | Figma, React, TypeScript, NodeJS, PostgreSQL" />
          <meta name="og:type" content="website" />
        </Head>
        <MyGlobalStyle isLoading={isLoading} isOverflow={isOverflow} />
        {/* Hero Section */}
        <HeaderFlexWrap>
          <Vanta />
        </HeaderFlexWrap>
        {/* About Me Section */}
        <About />
        {/* Projects Section */}
        <Projects />
        {/* My Skills Section */}
        <Skills />
        {/* Quote Section */}
        <Quote />
        {/* My Resume Section */}
        <Resume />
        {/* Let's Talk Section */}
        <LetsTalk />
        {/* The End Section */}
        <TheEnd />
        {/* Footer Section */}
        <Footer />
        {/* Top Progress Bar */}
        <ScrollProgress isLoading={isLoading} />
        {/* first Visit Loading Animation */}
        <Loading isLoading={isLoading} />
      </div>
    </LoginContext.Provider>
  );
}
