import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import SectionHeading from "../elements/SectionHeading";
import EmailBtn from "../public/assets/svg/lets-talk/send-email-btn.svg";
import media from "../utilities/mediaQueries";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import axios, { AxiosRequestConfig } from "axios";
gsap.registerPlugin(ScrollTrigger);
import MyRef from "../typings/MyRef";

const LetsTalkWrapper = styled.section`
  margin: 16rem 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: ${media.mobileL}) {
    margin: 3rem 0;
  }
`;

const Input = styled.input`
  padding: 1rem;
  background: transparent;
  border: none;
  color: #c9c9c9;
  font-family: "Coolvetica", sans-serif;
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
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background: transparent;
  border: none;
  color: #c9c9c9;
  font-family: "Coolvetica", sans-serif;
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
`;

const SubmitBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
  margin: 2rem auto;
  &:focus {
    outline: none;
  }
`;

const LetsTalkForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  @media (max-width: ${media.tablet}) {
    width: 90%;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
  width: 100%;
  @media (max-width: ${media.laptop}) {
    margin-top: 7rem;
  }
`;

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
    background: linear-gradient(115deg, #ac38d4, #4cf0f0);
    background-size: 50% 100%;
  }
`;

const InputInnerWrap = styled.div`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  height: 100%;
  background: #141a42;
  border-radius: 15px;
`;

export default function LetsTalk() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  let Heading: MyRef = useRef(null);
  let nameInput: MyRef = useRef(null);
  let emailInput: MyRef = useRef(null);
  let messageInput: MyRef = useRef(null);
  let submitBtn: MyRef = useRef(null);
  let form: MyRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: form as Element,
        toggleActions: "restart reverse restart reverse",
        start: "top center",
      },
    });
    tl.from(Heading, {
      y: -200,
      opacity: 0,
    }).from([nameInput, emailInput, messageInput, submitBtn], {
      x: -150,
      opacity: 0,
      stagger: 0.3,
    });
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();
    
    if(name || email || message == '') return

    const url = "https://api.web3forms.com/submit";

    const sendData = {
      apikey: "b8b30937-4e64-4333-b999-f3dd6082735e",
      name,
      email,
      message,
      subject: "KelvinPerez.com Inquiry",
    };

    const options: AxiosRequestConfig = {
      method: "POST",
      url,
      headers: { "Content-Type": "application/json" },
      data: sendData,
    };

    axios(options)
      .then((data) => console.log({ data }))
      .catch((err) => console.log(err));
      
      setName('')
      setEmail('')
      setMessage('')
  };

  return (
    <div id="letsTalk">
      <LetsTalkWrapper ref={(el) => (form = el)}>
        <SectionHeading ref={(el) => (Heading = el)}>Let's Talk</SectionHeading>

        <FormWrapper>
          <LetsTalkForm onSubmit={handleForm}>
            <InputWrapper ref={(el) => (nameInput = el)}>
              <InputInnerWrap>
                <Input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </InputInnerWrap>
            </InputWrapper>
            <InputWrapper ref={(el) => (emailInput = el)}>
              <InputInnerWrap>
                <Input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </InputInnerWrap>
            </InputWrapper>
            <InputWrapper ref={(el) => (messageInput = el)}>
              <InputInnerWrap>
                <TextArea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  required
                />
              </InputInnerWrap>
            </InputWrapper>

            <SubmitBtn type="submit" ref={(el) => (submitBtn = el)}>
              <img src={EmailBtn} alt="Email Btn" />
            </SubmitBtn>
          </LetsTalkForm>
        </FormWrapper>
      </LetsTalkWrapper>
    </div>
  );
}
