import styled from "styled-components";
import Image from "next/image";

const Transparent = ({ txt }) => (
  <Container>
    <Image src={"/assets/gh-tranparent.png"} width={100} height={100} />
    <Heading>{txt}</Heading>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h2`
  margin-top: 24px;
  font-family: ${(props) => props.theme.alternateFont};
  font-weight: ${(props) => props.theme.light};
`;

export default Transparent;
