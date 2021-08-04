import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const scrollToElement = (el) => {
    gsap.to(el, {
        scrollTo: '#aboutMe'
    })

};

export default scrollToElement;
