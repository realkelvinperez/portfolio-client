import SectionHeading from "../elements/SectionHeading";
import styled from "styled-components";
import Resume from "./Resume";

const ResumeWrapper = styled.div`
  position: relative;
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
export default function ResumeSection() {
  return (
    <ResumeWrapper>
      <SectionHeading>Resume</SectionHeading>
      <Resume />
      <ResumeLine />
    </ResumeWrapper>
  );
}
