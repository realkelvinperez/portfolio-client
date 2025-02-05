import styled from "styled-components";
import media from "../utilities/mediaQueries";

const Underline = styled.div`
  background: linear-gradient(90deg, #ac38d4 0%, #0ee0ae 100%);
  position: absolute;
  width: 40%;
  bottom: 7px;
  left: -0.9rem;
  z-index: 9;
  height: 20px;

  @media (max-width: ${media.laptop}) {
    left: -0.2rem;
    height: 13px;
  }

  @media (max-width: ${media.mobileL}) {
    font-size: 7vw;
  }
`;

const HeadingWrap = styled.div`
  position: relative;
  font-family: coolvetica, sans-serif;
  color: white;
  font-size: 2vw;
  letter-spacing: 0.4rem;
  cursor: pointer;

  @media (max-width: ${media.mobileL}) {
    font-size: 7.7vw;
    letter-spacing: 0.3rem;
  }
`;

const HeadingText = styled.span`
  display: inline-block;
  transform: translate(10px, -9px);
  font-size: 2vw;
  text-transform: uppercase;
  position: relative;
  z-index: 99;
  @media (max-width: ${media.tablet}) {
    font-size: 4vw;
  }

  @media (max-width: ${media.mobileL}) {
    font-size: 7vw;
  }
`;

interface Props {
  text: string;
}

export default function Heading({ text }: Props) {
  return (
    <HeadingWrap>
      <HeadingText>{text}</HeadingText>
      <Underline />
    </HeadingWrap>
  );
}
