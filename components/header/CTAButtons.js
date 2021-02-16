import MyWorkBtn from "../../public/assets/svg/MyWorkBtn.svg";
import LetsTalk from "../../public/assets/svg/LetsTalkBtn.svg";
import styled from "styled-components";
import media from "../../utilities/mediaQueries";

const CTABtnWrap = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
  @media (max-width: ${media.tablet}){
    flex-direction: row;
    align-items: center;
    justify-content: space-around; 
  }
  @media (max-width: ${media.mobileL}){
    flex-direction: column;
  }
`

const MyWorkWrap = styled.div`
  margin-right: 2rem;
  cursor: pointer;
  @media (max-width: ${media.tablet}){
    margin-right: 0;
  }
  @media (max-width: ${media.mobileL}){
    margin-right: 0;
    margin-bottom: 1rem;
  }
`

const MyWorkImg = styled.img`
  @media (min-width: ${media.desktop2k}){
    width: 9vw;
  }
`

const LetsTalkImg = styled.img`
  @media (min-width: ${media.desktop2k}){
    width: 9vw;
  }
`

const LetsTalkWrap = styled.div`
    cursor: pointer;
`

export default function CtaButtons() {
    return (
        <CTABtnWrap>
            <MyWorkWrap>
                <MyWorkImg src={MyWorkBtn} />
            </MyWorkWrap>
            <LetsTalkWrap>
                <LetsTalkImg src={LetsTalk} />
            </LetsTalkWrap>
        </CTABtnWrap>
    );
}
