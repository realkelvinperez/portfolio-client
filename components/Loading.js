import styled from 'styled-components'
import Lottie from 'react-lottie'
import animationData from '../public/assets/lottie/loading-disc.json'
import ReactTypingEffect from 'react-typing-effect'

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(115deg,#AC38D4,#4CF0F0);
  z-index: 999;
`

const InnerWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const LoadingText = styled.div`
  margin: 0;
  font-family: Soulmaze, sans-serif;
  font-size: 8rem;
  -webkit-text-stroke: white 3px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 0px 9px white);
  line-height: 7rem;
  letter-spacing: 1.7rem;
  text-align: center;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
`


export default function Loading({ isLoading }) {

    const loadingView = () => {
        if(isLoading) return (
            <Lottie
                options={defaultOptions}
                height={'100%'}
                width={'100%'}
            />
        )
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
    }

    return (
        <LoadingWrapper>
            <InnerWrapper>
                {
                    loadingView()
                }
                    <ReactTypingEffect
                        text={["Loading..."]}
                        speed={200}
                        eraseSpeed={100}
                        eraseDelay={1000}
                        cursorRenderer={cursor => <h1>{cursor}</h1>}
                        displayTextRenderer={(text, i) => {
                            return (
                                <LoadingText>
                                    {text.split('').map((char, i) => {
                                        const key = `${i}`;
                                        return (
                                            <span
                                                key={key}
                                            >{char}</span>
                                        );
                                    })}
                                </LoadingText>
                            );
                        }}
                    />
            </InnerWrapper>
        </LoadingWrapper>
    );
}
