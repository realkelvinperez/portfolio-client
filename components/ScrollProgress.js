import styled from "styled-components";
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
  transition: width ease-in-out 0.3s;
  @media (min-width: ${media.desktop2k}) {
    height: .8vw;
  }
`

export default function ScrollProgress({ isLoading }) {

    const [progressWidth, setProgressWidth] = useState(0)
    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

    useEffect(async () => {
        if (isLoading) await loadingProgressBar()
    }, [])

    useEffect( () => {
        console.log(`${progressWidth}%`)
    })

    const loadingProgressBar = async () => {
        for(let i = 1; i <= 100; i++){
            await sleep(100)
            setProgressWidth(i)
        }
        trigger('progressBar:done', { progressWidth })
        setProgressWidth(0)
        // trigger event
    }

    return (
        <>
            <Bar style={{width: `${progressWidth}%`}} />
        </>
    );
}
