import styled from 'styled-components'
import Heading from "./Heading";
import Circle from '../public/assets/svg/resume/resume-circle.svg'
import ResumeCTA from '../components/ResumeCTA'

const ResumeSection = styled.section`
  width: 90%;
  margin: 10rem auto 10rem auto;
`

const ResumeWrapper = styled.div`
  display: grid;
  grid-template-columns: 45% 10% 45%;
  align-items: center;
  margin-bottom: 10rem;
  margin-top: 20rem;
`

const InfoWrapper = styled.div`
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
    background: linear-gradient(115deg,#AC38D4,#4CF0F0);
    background-size: 50% 100%;
    z-index: -1;
  }
`

const ResumeInfo = styled.div`
  border-radius: 15px;
  padding: 2rem 3rem;
  background: linear-gradient(103.8deg, #283274 0%, rgba(40, 50, 116, 1) 100%);
`

const ResumeCircle = styled.img`
  align-self: center;
  justify-self: center;
`

const ResumeYear = styled.div`
  align-self: center;
  justify-self: end;
  margin: 0;
  font-family: Soulmaze, sans-serif;
  font-size: 14rem;
  opacity: 0.2; 
  -webkit-text-stroke: white 5px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 7rem;
  letter-spacing: 1.7rem;
`

const JobLocation = styled.div`
  font-family: Coolvetica, sans-serif;
  color: #4AE6F0;
  font-size: 1.5rem;
  letter-spacing: 2.5px;
`

const JobDescription = styled.div`
  margin-top: 1rem;
  font-family: Coolvetica, sans-serif;
  color: white;
  letter-spacing: 1px;
  opacity: 0.7;
  font-size: 1.4rem;
`

const ResumeCTAwrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 5rem;
`

const ResumeRelative = styled.div`
  position: relative;
`

const resumeData = [
        {
            year: "2015",
            jobTitle: "Student",
            jobLocation: "YouTube University + MOOC's",
            jobDescription: `I opened up YouTube and I searched “How do I Code....”, 
            and I was greeted with a slew of information, and I was like “What in the 
            world is this? I have to learn all of this stuff?” 😱 Luckily.... I found 
            a few Channels that taught me the basics and the topics that where the most 
            important... So the journey began 😎`
        },
        {
            year: "2016",
            jobTitle: "Intern",
            jobLocation: "Doctors Best Weight Loss",
            jobDescription: `After a few months of training and study my butt off i 
            wanted to gain real world experience, and so I decided the best option was 
            to get an internship. I searched on craigs list and saw an ad for an 
            internship and applied, and I’m grateful that I was able to get that opportunity.`
        },
        {
            year: "2017",
            jobTitle: "WordPress Developer",
            jobLocation: "Digital Age Marketing Group",
            jobDescription:  `Now with some real world experience under my belt I was ready to get paid for my work and 
            actually provide value to a company. Here I learned the power of PHP and WordPress and I fell in love. 
            Equipped with this power I helped the agency built and maintain countless websites.`
        },
        {
            year: "2018",
            jobTitle: "WordPress Developer",
            jobLocation: "iGreen Marketing",
            jobDescription:  `After Learning the power of WordPress and working on many clients websites i wanted a new 
            challenge and to grow. I reached out to another company and began to work with them to create custom designed 
            WordPress sites and JavaScript Apps with their team.`
        },
        {
            year: "2019",
            jobTitle: "Entrepreneur",
            jobLocation: "ViViFi",
            jobDescription:  `
            Now with 3 years as a Developer & a burning curiosity for entrepreneurship, I want to venture out on my 
            own and see what it was like to start and run my own agency name ViViFi. With my own agency I would design, 
            build and market business websites.
        `
        },
        {
            year: "2020",
            jobTitle: "Entrepreneur",
            jobLocation: "ViViFi",
            jobDescription:  `
                After working and managing clients websites and applications I came the realization that as much as I 
                like working on web projects my passion with in the ideation and execution of idea’s. I choose to finish 
                my remaining contracts and no longer take on client work.
            `
        },
        {
            year: "2021",
            jobTitle: "Full Stack Developer",
            jobLocation: "FREE AGENT",
            jobDescription:  `
            The present Day. In my journey as a developer I’ve had high’s and lows. I have learned my fair share from 
            massive failures and success but now, I am ready to bring my experience and expertise as a Full Stack Developer 
            and Entrepreneur to your team and add massive value. I can’t wait to begin.
            `
        },
]

export default function Resume() {
    return (
        <>
            <ResumeRelative>
                <ResumeSection>
                    {
                        resumeData.map(( item, i ) => {
                            if(i % 2 !== 0){
                                return (
                                    <ResumeWrapper key={i}>
                                        <ResumeYear>
                                            {item.year}
                                        </ResumeYear>
                                        <ResumeCircle src={Circle} />
                                        <InfoWrapper>
                                            <ResumeInfo>
                                                <Heading text={`${item.jobTitle}`} />
                                                <JobLocation>
                                                    {item.jobLocation}
                                                </JobLocation>
                                                <JobDescription>
                                                    {item.jobDescription}
                                                </JobDescription>
                                            </ResumeInfo>
                                        </InfoWrapper>
                                    </ResumeWrapper>
                                )
                            }else {
                                return (
                                    <ResumeWrapper key={i}>
                                        <InfoWrapper>
                                            <ResumeInfo>
                                                <Heading text={`${item.jobTitle}`} />
                                                <JobLocation>
                                                    {item.jobLocation}
                                                </JobLocation>
                                                <JobDescription>
                                                    {item.jobDescription}
                                                </JobDescription>
                                            </ResumeInfo>
                                        </InfoWrapper>
                                        <ResumeCircle src={Circle} />
                                        <ResumeYear>
                                            {item.year}
                                        </ResumeYear>
                                    </ResumeWrapper>
                                )
                            }
                        })
                    }
                </ ResumeSection>
                <ResumeCTAwrapper>
                    <ResumeCTA style={{cursor: 'pointer'}} />
                </ResumeCTAwrapper>
            </ResumeRelative>
        </>
    );
}
