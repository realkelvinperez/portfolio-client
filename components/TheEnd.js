import SectionHeading from "../elements/SectionHeading";
import styled from 'styled-components'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

const Title = styled.div`
  margin: 5rem 0;
`

export default function TheEnd() {
    let title = useRef(null)

    useEffect(() => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                toggleActions: 'restart play restart reverse',
                start: 'top center',
                markers: true
            },
            y: -200,
            opacity: 0
        })
    })

    return (
        <SectionHeading ref={el => title = el}>
            <Title>
                The End
            </Title>
        </SectionHeading>
    );
}
