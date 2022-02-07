import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: red;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  transition: width 0.6s ease-out;

  > a {
    width: 100%;
    heigth: 100%;
    text-decoration: none;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Title = styled.p`
  font-size: 2rem;
  text-decoration: none;
`;

export const Description = styled.span``;
