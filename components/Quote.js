import styled from 'styled-components'
import UpQuotes from '../public/assets/svg/UpQuotes.svg'
import DownQuotes from '../public/assets/svg/DownQuotes.svg'

const QuoteSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 18rem;
`

const QuoteWrapper = styled.div`
  font-family: coolvetica,sans-serif;
  color: white;
  font-size: 3.5vw;
  position: relative;
`
const QuoteText = styled.div``
const QuoteHighlighted = styled.span`
    display: inline-block;
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

const Quotes = styled.img`
  position: absolute;
    &.up {
      top: -80px;
      left: -90px;
    }
    &.down {
      top: 0;
      right: 0;
    }
`

export default function Quote(props) {
    return (
        <QuoteSection>
            <QuoteWrapper>
                <Quotes className="up" src={UpQuotes} />
                <QuoteText>
                    Design is not just what it looks like & feels like. Design is how it <QuoteHighlighted>Works!</QuoteHighlighted>
                </QuoteText>
                <QuoteAuthor>
                    <AuthorLine/>
                    <span>Steve Jobs</span>
                </QuoteAuthor>
                <Quotes className="down" src={DownQuotes} />
            </QuoteWrapper>
        </QuoteSection>
    );
}
