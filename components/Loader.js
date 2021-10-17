import Image from "next/image";
import styled from "styled-components";

const Loader = () => (
  <LoaderWrapper>
    <Image src={"/assets/loader.svg"} height={100} width={100} />
  </LoaderWrapper>
);

const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loader;
