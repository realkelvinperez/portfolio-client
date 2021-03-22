import styled from 'styled-components'
import UpQuotes from '../public/assets/svg/UpQuotes.svg'
import DownQuotes from '../public/assets/svg/DownQuotes.svg'
import media from '../utilities/mediaQueries'

const QuoteSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 18rem;
  margin-bottom: 20rem;
  @media (max-width: ${media.tablet}) {
    padding: 0;
  }
  @media (max-width: ${media.laptopL}) {
    padding: 0 13rem;
  }
  @media (max-width: ${media.laptop}) {
    padding: 0 10rem;
  }
  @media (max-width: ${media.tablet}) {
    padding: 0 7rem;
  }
  @media (max-width: ${media.mobileL}) {
    padding: 0 3rem;
    margin-bottom: 10rem;
  }
`

const QuoteWrapper = styled.div`
  font-family: coolvetica,sans-serif;
  color: white;
  font-size: 3.5vw;
  position: relative;
  @media (max-width: ${media.tablet}) {
    font-size: 6vw;
  }
  @media (max-width: ${media.tablet}) {
    font-size: 10vw;
  }
`

const QuoteText = styled.div`
  
`

const QuoteHighlighted = styled.span`
    display: inline-block;
    background: linear-gradient(270deg,#AC38D4,#4CF0F0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const QuoteAuthor = styled.div`
  display: flex;
  align-items: center;
`

const AuthorLine = styled.span`
  display: inline-block;
  background: linear-gradient(90deg,#AC38D4,#4CF0F0);
  height: 10px;
  width: 50px;
  margin-right: 1rem;
`

const AuthorName = styled.span`
    color: #4CF0F0
`

const Quotes = styled.img`
  position: absolute;
  @media (max-width: ${media.mobileL}) {
    width: 35%;
  }
  &.up {
    top: -80px;
    left: -90px;
      @media (max-width: ${media.mobileL}) {
        top: -30px;
        left: -30px;
      }
    }
    &.down {
      bottom: 0;
      right: -40px;
      @media (max-width: ${media.tablet}) {
        right: 0;
      }
    }
`

export default function Quote() {
    return (
        <QuoteSection>
            <QuoteWrapper>
                <Quotes className="up" src={UpQuotes} />
                <QuoteText>
                    Design is not just what it looks like & feels like. Design is how it <QuoteHighlighted>Works!</QuoteHighlighted>
                </QuoteText>
                <QuoteAuthor>
                    <AuthorLine/>
                    <AuthorName>Steve Jobs</AuthorName>
                </QuoteAuthor>
                <Quotes className="down" src={DownQuotes} />
            </QuoteWrapper>
        </QuoteSection>
    );
}
