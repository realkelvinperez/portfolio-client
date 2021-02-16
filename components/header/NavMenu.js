import BurgerMenu from "../../public/assets/svg/Burger-Menu.svg";
import styled from "styled-components";

const HeaderBurgerMenu = styled.div`
  filter: drop-shadow(0px 0px 9px #288F8F);
  cursor: pointer;
`

export default function NavMenu() {
    return (
        <HeaderBurgerMenu>
            <BurgerMenu />
        </HeaderBurgerMenu>
    );
}
