import Logo from "../Logo";
import NavMenu from "./NavMenu";
import styled from "styled-components";

const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem; 
`

export default function Nav() {
    return (
        <HeaderNav>
            <Logo />
            <NavMenu />
        </HeaderNav>
    );
}
