import Head from 'next/head'
import Header from '../components/Header'
import styled from 'styled-components'

const HeaderFlexWrap = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kelvin Perez Web Developer Portfolio | UI/UX & Full-Stack | Miami, FL | Figma PHP Laravel React SQL</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HeaderFlexWrap>
            <Header />
        </HeaderFlexWrap>
    </div>
  )
}
