import React from "react";
import { useState, useEffect, useRef } from 'react'
import Halo from 'vanta/dist/vanta.halo.min'
import Header from './Header'

export default function Vanta() {
    const [vantaEffect, setVantaEffect] = useState(0)
    let myRef: React.MutableRefObject<HTMLDivElement> | HTMLDivElement = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(Halo({
                el: myRef,
            }))
        }
        if ("style" in myRef) {
            myRef.style.cssText += `
              border-radius: 3rem;
              overflow: hidden;
              width: 83%;
          `
        }
    }, [vantaEffect])
    return (
        <div ref={el => myRef = el}>
            <Header />
        </div>
    )
}
