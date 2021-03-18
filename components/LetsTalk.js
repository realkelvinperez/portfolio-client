import { useState } from 'react'
import styled from "styled-components"
import SectionHeading from "../elements/SectionHeading";
import EmailBtn from '../public/assets/svg/lets-talk/send-email-btn.svg'

const LetsTalkWrapper = styled.section`
  margin: 16rem 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Input = styled.input`
    padding: 1rem;
    background: transparent;
    border: none;
    color: #c9c9c9;
    font-family: 'Coolvetica', sans-serif;
    font-weight: 100;
    letter-spacing: 2px;
    border-radius: 20px;
    width: 100%;
    box-sizing: border-box;
    font-size: 20px;
  &::placeholder {
      font-size: 20px;
    }
    &:focus {
      outline: none;
    }
`

const TextArea = styled.textarea`
  padding: 1rem;
  background: transparent;
  border: none;
  color: #c9c9c9;
  font-family: 'Coolvetica', sans-serif;
  font-weight: 100;
  letter-spacing: 2px;
  border-radius: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 250px;
  font-size: 20px;
  &::placeholder {
    font-size: 20px;
  }
  &:focus {
    outline: none;
  }
`

const SubmitBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  width: 27%;
  margin: 2rem auto;
  &:focus {
    outline: none;
  }
`

const LetsTalkForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
`

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 14rem;
  width: 100%;
`

const InputWrapper = styled.div`
  border-radius: 20px;
  margin: 1rem auto;
  position: relative;
  z-index: 2;
  width: calc(100% - 2.75rem);
  box-sizing: border-box;
  color: #fff;
  display: block;
  overflow: hidden;
  padding: 4px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(115deg,#AC38D4,#4CF0F0);
    background-size: 50% 100%;
  }
`

const InputInnerWrap = styled.div`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  height: 100%;
  background: #141a42;
  border-radius: 15px;
`

const initialFormState = {
    subject: '🚨 Let\'s Talk Form Submission',
    name: '',
    email: '',
    message: ''
}


export default function LetsTalk() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();

        const url = 'https://api.web3forms.com/submit';

        const sendData = {
            apikey: 'b8b30937-4e64-4333-b999-f3dd6082735e',
            name,
            email,
            message,
        }

        const fetchData = {
            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify(sendData),
        }


        try {
            debugger;
            const res = await fetch(url, fetchData)
            const data = await res.json()
            console.log('Success', { data })
        } catch (e) {
            alert('Message Failed to send');
            console.log(e)
        }
    }

    return (
        <LetsTalkWrapper>

            <SectionHeading>
                Let's Talk
            </SectionHeading>

            <FormWrapper>
                <LetsTalkForm onSubmit={handleForm}>
                    <InputWrapper>
                        <InputInnerWrap>
                            <Input
                                placeholder="Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </InputInnerWrap>
                    </InputWrapper>
                    <InputWrapper>
                        <InputInnerWrap>
                            <Input
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </InputInnerWrap>
                    </InputWrapper>
                    <InputWrapper>
                        <InputInnerWrap>
                            <TextArea
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                placeholder="Message"
                                required
                            />
                        </InputInnerWrap>
                    </InputWrapper>

                    <SubmitBtn type="submit">
                        <img src={EmailBtn} alt="Email Btn" />
                    </SubmitBtn>

                </LetsTalkForm>

            </FormWrapper>
        </LetsTalkWrapper>
    );
}
