import styled, { css } from "styled-components";
import Lottie from "react-lottie";
import animationData from "../public/assets/lottie/loading-disc.json";

const LoadingWrapper = styled.div<{ isLoading: boolean }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #141a43;
  z-index: 999;
  opacity: 1;
  transition: all 0.3s ease-in-out;
  ${(props) =>
    !props.isLoading &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
`;

const InnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
/*
const LoadingText = styled.div`
  margin: 0;
  font-family: Soulmaze,sans-serif;
  font-size: 10rem;
  -webkit-text-stroke: white 4px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-filter: drop-shadow(0px 0px 9px white);
  filter: drop-shadow(0px 0px 9px white);
  line-height: 7rem;
  letter-spacing: 1.7rem;
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: 50%;
  -webkit-transform: translate(-50%,50%);
  -ms-transform: translate(-50%,0);
  transform: translate(-50%,50%);
  opacity: .1;
  z-index: -1;
`
*/

interface Props {
  isLoading: boolean;
}

export default function Loading({ isLoading }: Props) {
  const loadingView = () => {
    if (isLoading)
      return (
        <>
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
        </>
      );
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <LoadingWrapper isLoading={isLoading}>
      <InnerWrapper>{loadingView()}</InnerWrapper>
    </LoadingWrapper>
  );
}
