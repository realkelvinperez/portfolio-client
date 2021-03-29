import { useState, useEffect, useRef } from 'react'
import Halo from 'vanta/dist/vanta.halo.min'
import Header from '../components/Header'

export default function Vanta() {
    const [vantaEffect, setVantaEffect] = useState(0)
    let myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(Halo({
                el: myRef,
            }))
        }
        myRef.style.cssText += `
              border-radius: 3rem;
              overflow: hidden;
              width: 83%;
          `
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <div ref={el => myRef = el}>
            <Header />
        </div>
    )
}
