import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  padding: 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  column-gap: 2.5rem;
  row-gap: 2.5rem;
  align-items: center;
`;
