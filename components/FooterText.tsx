import styled from 'styled-components'
import CopywriteSVG from '../public/assets/svg/Copywrite-logo.svg'
import HeartSVG from '../public/assets/svg/footer-heart.svg'
import media from "../utilities/mediaQueries";

const Img = styled.img`
  margin: 0 0.5rem;
  width: 1.8%;
  @media (max-width: ${media.tablet}){
    width: 4%
  }
`
const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20rem;
  margin-bottom: 2rem;
  @media (max-width: ${media.tablet}){
     margin-top: 7rem;
  }
`
const FooterText = styled.span`
  display: inline-block;
  color: white;
  font-family: Coolvetica, sans-serif;
  font-size: 2vw;
  letter-spacing: 3px;
  @media (max-width: ${media.tablet}){
    font-size: 4vw;
  }
  @media (max-width: ${media.mobileL}){
    font-size: 1rem;
  }
`

export default function Footer() {
    return (
        <FooterWrapper>
            <Img src={CopywriteSVG}/>
            <FooterText>
                {new Date().getFullYear()} Made With Love
            </FooterText>
            <Img src={HeartSVG}/>
            <FooterText>
                By Kelvin Perez
            </FooterText>
        </FooterWrapper>
    );
}
