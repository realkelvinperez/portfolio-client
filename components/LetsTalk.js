import { useState } from 'react';
import styled from "styled-components"
import SectionHeading from "../elements/SectionHeading";

const LetsTalkWrapper = styled.div`
  margin: 16rem 0;
`

const Input = styled.input``
const TextArea = styled.textarea``
const SubmitBtn = styled.button``

export default function LetsTalk() {
    return (

        <LetsTalkWrapper>
            <SectionHeading>
                Let's Talk
            </SectionHeading>
            <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE" />
                    <Input type="text" name="name" required />
                    <Input type="email" name="email" required />
                    <TextArea name="message" required />
                    <SubmitBtn type="submit">Submit Form</SubmitBtn>
            </form>
        </LetsTalkWrapper>
    );
}
