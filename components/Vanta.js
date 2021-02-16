import React, { useState, useEffect, useRef } from 'react'
import Halo from 'vanta/dist/vanta.halo.min'
import Header from '../components/Header'

export default function Vanta() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(Halo({
                el: myRef.current
            }))
        }
        console.log({myRef})
        myRef.current.style.cssText += `
              border-radius: 2.2rem;
              background-color: #14193b;
              overflow: hidden;
              width: 83%;
          `
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <div ref={myRef}>
        <Header />
    </div>
}
