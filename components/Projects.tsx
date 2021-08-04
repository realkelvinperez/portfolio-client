import styled, { css } from "styled-components";
import Container from "../elements/Container";
import Number1 from "../public/assets/svg/01.svg";
import Number2 from "../public/assets/svg/02.svg";
import AMZLaptop from "../public/assets/img/amz-snagger-screenshot.png";
import MyOSLaptop from "../public/assets/img/my-os-screenshot.png";
import AboutHeading from "../elements/about/AboutHeading";
import TitleUnderline from "../elements/TitleUnderline";
import AboutBioText from "../elements/about/AboutBioText";
import media from "../utilities/mediaQueries";
import SectionHeading from "../elements/SectionHeading";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import MyRef from "../typings/MyRef";
import MyWorkCTA from "./MyWorkCTA";

interface StyledProps {
  right?: boolean;
}

const AngledBG = styled.div`
  clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
  background: linear-gradient(141.17deg, #5b1e71 2%, #298484 100%);
  padding: 30rem 0;
  width: 100%;
  margin-bottom: 4rem;
  @media (max-width: ${media.laptop}) {
    padding: 20rem 0;
  }
  @media (max-width: ${media.tablet}) {
    padding: 12rem 0;
  }
  @media (max-width: ${media.mobileL}) {
    clip-path: polygon(0 7%, 100% 0, 100% 93%, 0% 100%);
  }
`;

const NumberImg = styled.img`
  width: 33%;
  @media (max-width: ${media.mobileL}) {
    width: 75%;
  }
`;

const NumberWrap = styled.div<StyledProps>`
  @media (max-width: ${media.mobileL}) {
    text-align: center;
  }
  ${(props) =>
    props.right &&
    css`
      text-align: right;
      @media (max-width: ${media.mobileL}) {
        text-align: center;
      }
    `}
`;

const LaptopImg = styled.img`
  cursor: pointer;
  width: 60%;
  @media (max-width: ${media.mobileL}) {
    width: 100%;
    margin: 2rem 0;
  }
`;
const LaptopImgWrap = styled.div<StyledProps>`
  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `}
`;
const ProjectWrap = styled.div``;

const ProjectText = styled.div<StyledProps>`
  width: 50%;
  @media (max-width: ${media.mobileL}) {
    width: 100%;
    margin: 2rem 0;
  }
  ${(props) =>
    props.right &&
    css`
      margin: 0 0 0 auto;
    `}
`;

export default function Projects() {
  let title: MyRef = useRef(null);

  let workSection: MyRef = useRef(null);

  let project1: MyRef = useRef(null);
  let number1: MyRef = useRef(null);
  let laptop1: MyRef = useRef(null);
  let textHeading1: MyRef = useRef(null);
  let textBody1: MyRef = useRef(null);
  let project1CTA: MyRef = useRef(null);

  let project2: MyRef = useRef(null);
  let number2: MyRef = useRef(null);
  let laptop2: MyRef = useRef(null);
  let textHeading2: MyRef = useRef(null);
  let textBody2: MyRef = useRef(null);
  let project2CTA: MyRef = useRef(null);

  useEffect(() => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title as Element,
        toggleActions: "restart reverse restart reverse",
        start: "top 80%",
        end: "500px 20%",
      },
      y: -200,
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: project1 as Element,
        toggleActions: "restart reverse restart reverse",
        start: "top 80%",
        end: "center 0px",
      },
    });

    tl.from(number1, {
      opacity: 0,
      x: 100,
    })
      .from([textHeading1, textBody1], {
        opacity: 0,
        x: -100,
        stagger: 0.2,
      })
      .from([laptop1], {
        opacity: 0,
        x: 100,
        stagger: 0.3,
      });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: project2 as Element,
        toggleActions: "restart reverse restart reverse",
        start: "top 80%",
        end: "center 0px",
      },
    });

    t2.from(number2, {
      opacity: 0,
      x: -100,
    })
      .from([textHeading2, textBody2], {
        opacity: 0,
        x: 100,
        stagger: 0.2,
      })
      .from([laptop2], {
        opacity: 0,
        x: -100,
        stagger: 0.3,
      });
  }, []);
  
  const AMZSnaggerLink = 'https://chrome.google.com/webstore/detail/amz-snagger-amazon-dropsh/kdcnbaifjppfkjmichaahffmpbfhacgc'
  const comingSoonLink = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebassets.inman.com%2Fwp-content%2Fuploads%2F2019%2F10%2FUntitled-design-2019-10-29T153346.079-1400x621.jpg&f=1&nofb=1'


  return (
    <>
      <SectionHeading id="myWork" ref={(el) => (title = el)} work>
        Work
      </SectionHeading>
      <AngledBG ref={(el) => (workSection = el)}>
        <Container>
          <ProjectWrap ref={(el) => (project1 = el)}>
            <NumberWrap right>
              <NumberImg ref={(el) => (number1 = el)} src={Number1} />
            </NumberWrap>
            <ProjectText>
              <AboutHeading ref={(el) => (textHeading1 = el)}>
                AMZ SNAGGER APP
                <TitleUnderline />
              </AboutHeading>
              <AboutBioText ref={(el) => (textBody1 = el)}>
                An App built to solve the problems of AMZ Dropshippers by
                providing a streamlined and automated way to source profitable
                products and save hours of time.
                <br /> <strong>Tech Used:</strong> Vue.js, Node.js, Chrome
                Extension API, Stripe API
              </AboutBioText>
              <MyWorkCTA url={AMZSnaggerLink} />
            </ProjectText>
            <LaptopImgWrap right>
              <LaptopImg ref={(el) => (laptop1 = el)} src={AMZLaptop} />
            </LaptopImgWrap>
          </ProjectWrap>
          <ProjectWrap ref={(el) => (project2 = el)}>
            <NumberWrap>
              <NumberImg ref={(el) => (number2 = el)} src={Number2} />
            </NumberWrap>
            <ProjectText right>
              <AboutHeading ref={(el) => (textHeading2 = el)}>
                MyOS
                <TitleUnderline />
              </AboutHeading>
              <AboutBioText ref={(el) => (textBody2 = el)}>
                An App built to solve the issue of modern day humans where we
                have a lot of growth resources but little ways to functionally
                intergrate it into our daily lives, what better way than your
                own digital personal assistant, a la Jarvis.
                <br /> <strong>Tech Used:</strong> React, Typescript, Redux,
                React Query, Node.js, Adonis.js, PostgreSQL, Python
              </AboutBioText>
              <MyWorkCTA url={comingSoonLink} />
            </ProjectText>
            <LaptopImg ref={(el) => (laptop2 = el)} src={MyOSLaptop} />
          </ProjectWrap>
        </Container>
      </AngledBG>
    </>
  );
}
