import BurgerMenu from "../../public/assets/svg/Burger-Menu.svg";
import styled from "styled-components";
import media from "../../utilities/mediaQueries";

const HeaderBurgerMenu = styled.div`
  filter: drop-shadow(0px 0px 9px #288F8F);
  cursor: pointer;
`

const MenuImg = styled.img`
  @media (min-width: ${media.desktop2k}){
    width: 3vw;
  }
`

export default function NavMenu() {
    return (
        <HeaderBurgerMenu>
            <MenuImg src={BurgerMenu} />
        </HeaderBurgerMenu>
    );
}
