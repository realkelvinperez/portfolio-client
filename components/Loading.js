import styled, { css } from 'styled-components'
import Lottie from 'react-lottie'
import animationData from '../public/assets/lottie/loading-disc.json'
import ReactTypingEffect from 'react-typing-effect'

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #141A43;
  z-index: 999;
  opacity: 1;
  transition: all .3s ease-in-out;
  ${props => !props.isLoading && css`
    opacity: 0;
    visibility: hidden;
  `}
`

const InnerWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

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

export default function Loading({ isLoading }) {

    const loadingView = () => {
        if(isLoading) return (
            <>
            <Lottie
                options={defaultOptions}
                height={'100%'}
                width={'100%'}
            />
            </>
        )
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
    }

    return (
        <LoadingWrapper isLoading={isLoading}>
            <InnerWrapper>
                {
                    loadingView()
                }
            </InnerWrapper>
        </LoadingWrapper>
    );
}
