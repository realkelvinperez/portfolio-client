import styled from 'styled-components'
import CopywriteSVG from '../public/assets/svg/Copywrite-logo.svg'
import HeartSVG from '../public/assets/svg/footer-heart.svg'

const Img = styled.img`
  margin: 0 1rem;
`
const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20rem;
  margin-bottom: 10rem;
`
const FooterText = styled.span`
  display: inline-block;
  color: white;
  font-family: Coolvetica, sans-serif;
  font-size: 2vw;
  letter-spacing: 3px;
`

export default function Footer(props) {
    return (
        <FooterWrapper>
            <Img src={CopywriteSVG}/>
            <FooterText>
                Made With Love
            </FooterText>
            <Img src={HeartSVG}/>
            <FooterText>
                By Kelvin Perez
            </FooterText>
        </FooterWrapper>
    );
}
