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
  width: 100vw;
  height: 100vh;
`;
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
