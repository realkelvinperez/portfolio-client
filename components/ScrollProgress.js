import styled, { css } from "styled-components";
import {useState, useEffect} from 'react'
import media from "../utilities/mediaQueries";
import { trigger } from "../utilities/events";

const Bar = styled.div`
  height: 13px;
  background: linear-gradient(270deg, rgba(113, 57, 185, 1) 0%, rgb(30, 170, 231) 100%);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: all ease-in-out 0.05s;
  @media (min-width: ${media.desktop2k}) {
    height: .8vw;
  }
  
  ${props => props.progressWidth && css`
    width: ${props.progressWidth + '%'}
  `}
  
  ${props => props.progressWidth >= 100 && css`
    opacity: 0;
  `}
`

export default function ScrollProgress({ isLoading }) {

    const [progressWidth, setProgressWidth] = useState(0)
    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

    useEffect(async () => {
        if (isLoading) await loadingProgressBar()
    }, [])

    const loadingProgressBar = async () => {
        for(let i = 1; i <= 100; i++){
            await sleep(33.5)
            setProgressWidth(i)
        }
        trigger('progressBar:done', { progressWidth })
    }

    return (
        <>
            <Bar
                progressWidth={progressWidth}
            />
        </>
    );
}
