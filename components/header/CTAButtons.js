import MyWorkBtn from "../../public/assets/svg/MyWorkBtn.svg";
import LetsTalk from "../../public/assets/svg/LetsTalkBtn.svg";
import styled from "styled-components";

const CTABtnWrap = styled.div`
    margin-top: 2rem;
`

export default function CtaButtons() {
    return (
        <CTABtnWrap>
            <MyWorkBtn style={{marginRight: '2rem', cursor: 'pointer'}} />
            <LetsTalk style={{ cursor: 'pointer'}} />
        </CTABtnWrap>
);
}
