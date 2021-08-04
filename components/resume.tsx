import styled, { css } from "styled-components";
import Heading from "./Heading";
import Circle from "../public/assets/svg/resume/resume-circle.svg";
import ResumeCTA from "./ResumeCTA";
import media from "../utilities/mediaQueries";
import SectionHeading from "../elements/SectionHeading";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import MyRef from "../typings/MyRef";

const ResumeSection = styled.section`
  width: 90%;
  margin: 10rem auto 10rem auto;
`;

const ResumeWrapper = styled.div`
  display: grid;
  grid-template-columns: 45% 10% 45%;
  align-items: center;
  margin-bottom: 10rem;
  margin-top: 20rem;
  @media (max-width: ${media.tablet}) {
    grid-template-columns: 1fr;
    grid-gap: 4rem;
    margin-bottom: 5rem;
    margin-top: 5rem;
  }
`;

const ResumeLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 10px;
  height: 94%;
  background: linear-gradient(
    180deg,
    rgba(172, 56, 212, 0) 0%,
    rgba(172, 56, 212, 1) 20%,
    rgba(76, 240, 240, 1) 80%,
    rgba(76, 240, 240, 0) 100%
  );
  transform: translate(-50%, 3%);
  z-index: -1;
`;

const InfoWrapper = styled.div<{ even?: boolean }>`
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  padding: 6px;
  margin: 0 3rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(115deg, #ac38d4, #4cf0f0);
    background-size: 50% 100%;
    z-index: -1;
  }

  @media (max-width: ${media.laptopL}) {
    font-size: 11rem;
    margin: 0 1rem;
  }
  ${(props) =>
    props.even &&
    css`
      @media (max-width: ${media.tablet}) {
        grid-row-start: 3;
      }
    `}
`;

const ResumeInfo = styled.div`
  border-radius: 15px;
  padding: 2rem 3rem;
  background: linear-gradient(103.8deg, #283274 0%, rgba(40, 50, 116, 1) 100%);
  @media (max-width: ${media.tablet}) {
    padding: 2rem 2rem;
  }
`;

const ResumeCircle = styled.img`
  align-self: center;
  justify-self: center;
`;

const ResumeYear = styled.div<{ even?: boolean }>`
  align-self: center;
  justify-self: end;
  margin: 0;
  font-family: Soulmaze, sans-serif;
  font-size: 14rem;
  opacity: 0.2;
  -webkit-text-stroke: 5px white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 7rem;
  letter-spacing: 1.7rem;
  @media (max-width: ${media.laptopL}) {
    font-size: 11rem;
  }
  @media (max-width: ${media.laptop}) {
    font-size: 7rem;
  }
  @media (max-width: ${media.tablet}) {
    justify-self: center;
  }
  @media (max-width: ${media.mobileL}) {
    font-size: 6rem;
  }
  @media (max-width: ${media.mobileM}) {
    font-size: 5rem;
  }
  @media (max-width: ${media.mobileS}) {
    font-size: 4rem;
  }
  ${(props) =>
    props.even &&
    css`
      @media (max-width: ${media.tablet}) {
        grid-row-start: 1;
      }
    `}
`;

const JobLocation = styled.div`
  font-family: Coolvetica, sans-serif;
  color: #4ae6f0;
  font-size: 1.5rem;
  letter-spacing: 2.5px;
  @media (max-width: ${media.laptop}) {
    font-size: 1rem;
  }
`;

const JobDescription = styled.div`
  margin-top: 1rem;
  font-family: Coolvetica, sans-serif;
  color: white;
  letter-spacing: 1px;
  opacity: 0.7;
  font-size: 1.4rem;
  @media (max-width: ${media.laptop}) {
    font-size: 1.1rem;
  }
`;

const ResumeCTAwrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 5rem;
`;

const ResumeRelative = styled.div`
  position: relative;
`;

export default function Resume() {
  let resumeSection: MyRef = useRef(null);
  let Title: MyRef = useRef(null);

  let Year2015: MyRef = useRef(null);
  let Circle2015: MyRef = useRef(null);
  let Card2015: MyRef = useRef(null);

  let Year2016: MyRef = useRef(null);
  let Circle2016: MyRef = useRef(null);
  let Card2016: MyRef = useRef(null);

  let Year2017: MyRef = useRef(null);
  let Circle2017: MyRef = useRef(null);
  let Card2017: MyRef = useRef(null);

  let Year2018: MyRef = useRef(null);
  let Circle2018: MyRef = useRef(null);
  let Card2018: MyRef = useRef(null);

  let Year2019: MyRef = useRef(null);
  let Circle2019: MyRef = useRef(null);
  let Card2019: MyRef = useRef(null);

  let Year2020: MyRef = useRef(null);
  let Circle2020: MyRef = useRef(null);
  let Card2020: MyRef = useRef(null);

  let Year2021: MyRef = useRef(null);
  let Circle2021: MyRef = useRef(null);
  let Card2021: MyRef = useRef(null);

  let ResumeBtn: MyRef = useRef(null);

  const triggerOptions: { start: string } = {
    start: "center 60%",
  };

  useEffect(() => {
    gsap.from(Title, {
      scrollTrigger: {
        trigger: Title as Element,
        toggleActions: "restart reverse restart reverse",
        start: "top center",
        end: "center top",
      },
      y: -200,
      opacity: 0,
    });

    gsap.from([Card2015, Year2015, Circle2015], {
      scrollTrigger: {
        trigger: Card2015 as Element,
        toggleActions: "restart reverse restart reverse",
        ...triggerOptions,
      },
      x: -200,
      opacity: 0,
      stagger: 0.2,
    });

    gsap.from([Card2016, Year2016, Circle2016], {
      scrollTrigger: {
        trigger: Card2016 as Element,
        toggleActions: "restart reverse restart reverse",
        ...triggerOptions,
      },
      x: 200,
      opacity: 0,
      stagger: 0.2,
    });
    gsap.from([Card2017, Year2017, Circle2017], {
      scrollTrigger: {
        trigger: Card2017 as Element,
        toggleActions: "restart reverse restart reverse",
        ...triggerOptions,
      },
      x: -200,
      opacity: 0,
      stagger: 0.2,
    });

    gsap.from([Card2018, Year2018, Circle2018], {
      scrollTrigger: {
        trigger: Card2018 as Element,
        toggleActions: "restart reverse restart reverse",
        ...triggerOptions,
      },
      x: 200,
      opacity: 0,
      stagger: 0.2,
    });

    gsap.from([Card2019, Year2019, Circle2019], {
      scrollTrigger: {
        trigger: Card2019 as Element,
        toggleActions: "restart reverse restart reverse",
        ...triggerOptions,
      },
      x: -200,
      opacity: 0,
      stagger: 0.2,
    });

    gsap.from([Card2020, Year2020, Circle2020], {
      scrollTrigger: {
        trigger: Card2020 as Element,
        toggleActions: "restart reverse restart reverse",
        ...triggerOptions,
      },
      x: 200,
      opacity: 0,
      stagger: 0.2,
    });
    gsap.from([Card2021, Year2021, Circle2021, ResumeBtn], {
      scrollTrigger: {
        trigger: Card2021 as Element,
        toggleActions: "restart reverse restart reverse",
        ...triggerOptions,
      },
      x: -200,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);
  return (
    <div>
      <ResumeRelative ref={(el) => (resumeSection = el)}>
        <SectionHeading ref={(el) => (Title = el)}>Resume</SectionHeading>
        <ResumeSection>
          {/* ODD - 2015 */}
          <ResumeWrapper>
            <ResumeYear ref={(el) => (Year2015 = el)}>2015</ResumeYear>
            <ResumeCircle ref={(el) => (Circle2015 = el)} src={Circle} />
            <InfoWrapper ref={(el) => (Card2015 = el)}>
              <ResumeInfo>
                <Heading text="Student" />
                <JobLocation>YouTube University + MOOC's</JobLocation>
                <JobDescription>
                  I opened up YouTube and I searched “How do I Code....”, and I
                  was greeted with a slew of information, and I was like “What
                  in the world is this? I have to learn all of this stuff?” 😱
                  Luckily.... I found a few Channels that taught me the basics
                  and the topics that where the most important... So the journey
                  began 😎
                </JobDescription>
              </ResumeInfo>
            </InfoWrapper>
          </ResumeWrapper>
          {/* EVEN - 2016 */}
          <ResumeWrapper>
            <InfoWrapper ref={(el) => (Card2016 = el)} even>
              <ResumeInfo>
                <Heading text="Intern" />
                <JobLocation>Doctors Best Weight Loss</JobLocation>
                <JobDescription>
                  After a few months of training and study my butt off i wanted
                  to gain real world experience, and so I decided the best
                  option was to get an internship. I searched on craigs list and
                  saw an ad for an internship and applied, and I’m grateful that
                  I was able to get that opportunity.
                </JobDescription>
              </ResumeInfo>
            </InfoWrapper>
            <ResumeCircle ref={(el) => (Circle2016 = el)} src={Circle} />
            <ResumeYear ref={(el) => (Year2016 = el)} even>
              2016
            </ResumeYear>
          </ResumeWrapper>
          {/* ODD - 2017 */}
          <ResumeWrapper>
            <ResumeYear ref={(el) => (Year2017 = el)}>2017</ResumeYear>
            <ResumeCircle ref={(el) => (Circle2017 = el)} src={Circle} />
            <InfoWrapper ref={(el) => (Card2017 = el)}>
              <ResumeInfo>
                <Heading text="WordPress Developer" />
                <JobLocation>Digital Age Marketing Group</JobLocation>
                <JobDescription>
                  Now with some real world experience under my belt I was ready
                  to get paid for my work and actually provide value to a
                  company. Here I learned the power of PHP and WordPress and I
                  fell in love. Equipped with this power I helped the agency
                  built and maintain countless websites.😎
                </JobDescription>
              </ResumeInfo>
            </InfoWrapper>
          </ResumeWrapper>
          {/* EVEN - 2018 */}
          <ResumeWrapper>
            <InfoWrapper ref={(el) => (Card2018 = el)} even>
              <ResumeInfo>
                <Heading text="WordPress Developer" />
                <JobLocation>iGreen Marketing</JobLocation>
                <JobDescription>
                  After Learning the power of WordPress and working on many
                  clients websites i wanted a new challenge and to grow. I
                  reached out to another company and began to work with them to
                  create custom designed WordPress sites and JavaScript Apps
                  with their team.
                </JobDescription>
              </ResumeInfo>
            </InfoWrapper>
            <ResumeCircle ref={(el) => (Circle2018 = el)} src={Circle} />
            <ResumeYear ref={(el) => (Year2018 = el)} even>
              2018
            </ResumeYear>
          </ResumeWrapper>
          {/* ODD- 2019 */}
          <ResumeWrapper>
            <ResumeYear ref={(el) => (Year2019 = el)}>2019</ResumeYear>
            <ResumeCircle ref={(el) => (Circle2019 = el)} src={Circle} />
            <InfoWrapper ref={(el) => (Card2019 = el)}>
              <ResumeInfo>
                <Heading text="ViViFi LLC" />
                <JobLocation>Freelancer</JobLocation>
                <JobDescription>
                  Now with 3 years as a Developer & a burning curiosity for
                  entrepreneurship, I want to venture out on my own and see what
                  it was like to start and run my own agency name ViViFi. With
                  my own agency I would design, build and market business
                  websites.
                </JobDescription>
              </ResumeInfo>
            </InfoWrapper>
          </ResumeWrapper>
          {/* EVEN - 2020 */}
          <ResumeWrapper>
            <InfoWrapper ref={(el) => (Card2020 = el)} even>
              <ResumeInfo>
                <Heading text="ViViFi LLC" />
                <JobLocation>Freelancer</JobLocation>
                <JobDescription>
                  After working and managing clients websites and applications I
                  came the realization that as much as I like working on web
                  projects my passion with in the ideation and execution of
                  idea’s. I choose to finish my remaining contracts and no
                  longer take on client work.
                </JobDescription>
              </ResumeInfo>
            </InfoWrapper>
            <ResumeCircle ref={(el) => (Circle2020 = el)} src={Circle} />
            <ResumeYear even ref={(el) => (Year2020 = el)}>
              2020
            </ResumeYear>
          </ResumeWrapper>
          {/* ODD - 2021 */}
          <ResumeWrapper>
            <ResumeYear ref={(el) => (Year2021 = el)}>2021</ResumeYear>
            <ResumeCircle ref={(el) => (Circle2021 = el)} src={Circle} />
            <InfoWrapper ref={(el) => (Card2021 = el)}>
              <ResumeInfo>
                <Heading text="Full Stack Developer" />
                <JobLocation>Free Agent</JobLocation>
                <JobDescription>
                  The present Day. In my journey as a developer I’ve had high’s
                  and lows. I have learned my fair share from massive failures
                  and success but now, I am ready to bring my experience and
                  expertise as a Full Stack Developer and Entrepreneur to your
                  team and add massive value. I can’t wait to begin.😎
                </JobDescription>
              </ResumeInfo>
            </InfoWrapper>
          </ResumeWrapper>
        </ResumeSection>
        <ResumeCTAwrapper ref={(el) => (ResumeBtn = el)}>
          <ResumeCTA />
        </ResumeCTAwrapper>
        <ResumeLine />
      </ResumeRelative>
    </div>
  );
}
