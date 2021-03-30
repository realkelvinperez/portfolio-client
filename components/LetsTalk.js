import { useRef, useEffect, useState } from 'react'
import styled from "styled-components"
import SectionHeading from "../elements/SectionHeading";
import EmailBtn from '../public/assets/svg/lets-talk/send-email-btn.svg'
import media from "../utilities/mediaQueries";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import axios from "axios";
gsap.registerPlugin(ScrollTrigger);


const LetsTalkWrapper = styled.section`
  margin: 16rem 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: ${media.mobileL}){
    margin: 3rem 0;
  }
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
  width: 100%;
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
  @media (max-width: ${media.tablet}){
    width: 90%;
  }
`

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
  width: 100%;
  @media (max-width: ${media.laptop}){
    margin-top: 7rem;
  }
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
    subject: `🚨 Let's Talk Form Submission`,
    name: '',
    email: '',
    message: ''
}

export default function LetsTalk() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    let Heading = useRef(null)
    let nameInput = useRef(null)
    let emailInput = useRef(null)
    let messageInput = useRef(null)
    let submitBtn = useRef(null)
    let form = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: form,
                    toggleActions: 'restart reverse restart reverse',
                    start: 'top center',
                },
            }
        )
        tl.from(Heading, {
            y: -200,
            opacity: 0
        })
        .from([nameInput, emailInput, messageInput, submitBtn], {
            x: -150,
            opacity: 0,
            stagger: 0.3
        })
    }, [])

    const handleForm = async (e) => {
        debugger;
        e.preventDefault();

        const url = 'https://api.web3forms.com/submit';

        const sendData = {
            apikey: 'b8b30937-4e64-4333-b999-f3dd6082735e',
            name,
            email,
            message,
            subject: 'Insomnia Form Submission',
        }

        const options = {
            method: 'POST',
            url: 'https://api.web3forms.com/submit',
            headers: {'Content-Type': 'application/json'},
            data: sendData
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <>
            <LetsTalkWrapper ref={el => form = el}>

                <SectionHeading ref={el => Heading = el}>
                    Let's Talk
                </SectionHeading>

                <FormWrapper>
                    <LetsTalkForm onSubmit={handleForm}>
                        <InputWrapper
                            ref={el => nameInput = el}
                        >
                            <InputInnerWrap>
                                <Input
                                    placeholder="Name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                />
                            </InputInnerWrap>
                        </InputWrapper>
                        <InputWrapper
                            ref={el => emailInput = el}
                        >
                            <InputInnerWrap>
                                <Input
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </InputInnerWrap>
                        </InputWrapper>
                        <InputWrapper
                            ref={el => messageInput = el}
                        >
                            <InputInnerWrap>
                                <TextArea
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    placeholder="Message"
                                    required
                                />
                            </InputInnerWrap>
                        </InputWrapper>

                        <SubmitBtn type="submit" ref={el => submitBtn = el}>
                            <img src={EmailBtn} alt="Email Btn" />
                        </SubmitBtn>

                    </LetsTalkForm>

                </FormWrapper>
            </LetsTalkWrapper>
        </>
    );
}
