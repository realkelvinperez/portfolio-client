import BurgerMenu from "../../public/assets/svg/Burger-Menu.svg";
import styled from "styled-components";
import media from "../../utilities/mediaQueries";
import { useRef, useEffect, useContext, useState } from 'react'
import LoginContext from "../../context/LoginContext";
import { gsap } from 'gsap';

const HeaderBurgerMenu = styled.div`
  filter: drop-shadow(0px 0px 9px #288F8F);
  cursor: pointer;
`

const MenuImg = styled.img`
  @media (min-width: ${media.desktop2k}){
    width: 3vw;
  }
`

export default function NavMenu({callback}) {
    const { isLoading } = useContext(LoginContext)
    let menu = useRef(null);

    useEffect(() => {
        if(!isLoading){
            gsap.from(
                menu, {
                    x: 100,
                    opacity: 0,
                    ease: 'power2.inOut',
                    duration: 1.5
                })
        }
    },[isLoading])

    const menuClick = () => {
        console.log(`Clicked the Menu`)
        if(callback) callback()
    }

    return (
        <HeaderBurgerMenu ref={el => menu = el}>
            <MenuImg
                onClick={menuClick}
                src={BurgerMenu}
            />
        </HeaderBurgerMenu>
    );
}
