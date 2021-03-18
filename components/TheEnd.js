import SectionHeading from "../elements/SectionHeading";
import styled from 'styled-components'

const Title = styled.div`
  margin: 5rem 0rem;
`

export default function TheEnd(props) {
    return (
        <SectionHeading>
            <Title>
                The End
            </Title>
        </SectionHeading>
    );
}
