import { useState } from 'react';
import styled from "styled-components"
import SectionHeading from "../elements/SectionHeading";
import Select from "react-select";
import 'react-select/base'

const options = [
    { value: 'UI/UX Design', label: 'UI/UX Design' },
    { value: 'App Development', label: 'App Development' },
    { value: 'Mobile Development', label: 'Mobile Development' },
    { value: 'Digital Marketing', label: 'Digital Marketing' },
];

const inputFontSize = "3vw"

const LetsTalkWrapper = styled.div`
  margin: 16rem 0;
`

const TalkForm = styled.div`
  width: 80%;
  margin: 0 auto;
`

const FormItem = styled.div`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 3rem auto;
  & span {
        font-family: coolvetica,sans-serif;
        color: white; 
        //font-size: 5vw;
        font-size: ${inputFontSize};
        display: inline-block;
        flex-grow: 4;
        width: 55vw;
      }
`

const FormInputText = styled.input`
  padding: 2rem;
  border: none !important;
  background: transparent;
  //border: solid red 2px;
  width: 100%;
  display: inline-block;
  font-family: coolvetica,sans-serif;
  font-size: ${inputFontSize};
  color: white;
  &::placeholder {
    font-family: coolvetica,sans-serif;
    font-size: 3.5vw;
  }
`

export default function LetsTalk() {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <LetsTalkWrapper>
            <SectionHeading>
                Let's Talk
            </SectionHeading>
            <TalkForm>
                <FormItem>
                    <span>
                        Hey, My Name is
                    </span>
                    <FormInputText
                        placeholder="John"
                        name="Name"
                        type="text"
                    />
                </FormItem>
                <FormItem>
                    <span>
                        And I want to discuss
                    </span>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                </FormItem>
                <FormItem>
                    <span>
                        Get in touch with me at
                    </span>
                    <FormInputText
                        placeholder="john@example.com"
                        name="Email"
                        type="email"
                    />
                </FormItem>
            </TalkForm>
        </LetsTalkWrapper>
    );
}
