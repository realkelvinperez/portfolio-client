import styled from "styled-components";
import {useState, useRef, useEffect} from 'react'
import media from "../utilities/mediaQueries";

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
    const loadingEl = useRef()
    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

    useEffect(async () => {
        if(isLoading) await loadingProgressBar()
    }, [])

    useEffect( () => {
        console.log(`${progressWidth}%`)
    })

    const loadingProgressBar = async () => {
        console.log(loadingEl.current)
        for(let i = 1; i <= 100; i++){
            await sleep(100)
            setProgressWidth(i)
        }
    }

    return (
        <>
            <Bar ref={loadingEl} style={{width: `${progressWidth}%`}} />
        </>
    );
}
