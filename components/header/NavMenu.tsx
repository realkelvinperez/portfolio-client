import BurgerMenu from "../../public/assets/svg/Burger-Menu.svg";
import styled from "styled-components";
import media from "../../utilities/mediaQueries";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import MyRef from "../../typings/MyRef";
import { trigger } from "../../utilities/events";

const HeaderBurgerMenu = styled.div`
  filter: drop-shadow(0px 0px 9px #288f8f);
  cursor: pointer;
`;

const MenuImg = styled.img`
  @media (min-width: ${media.desktop2k}) {
    width: 3vw;
  }
`;

interface IProps {
  callback: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavMenu({ callback }: IProps) {
  let menu: MyRef = useRef(null);

  useEffect(() => {
      gsap.from(menu, {
        x: 100,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1.5,
      });
  }, []);

  const menuClick = () => {
    console.log(`Clicked the Menu and more`, callback);
    trigger("menu:open", {status: 'menu closed'});
    if (callback) callback(true);
  };

  return (
    <HeaderBurgerMenu ref={(el) => (menu = el)}>
      <MenuImg onClick={menuClick} src={BurgerMenu} />
    </HeaderBurgerMenu>
  );
}
