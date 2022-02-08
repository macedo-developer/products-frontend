import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 30rem;
  background: #c76d50;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  transition: font-size 0.6s ease-out;
  border-radius: 0.5rem;

  &:hover {
    font-size: 2.5rem;
  }

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
  color: #fff;
`;

export const Description = styled.span`
  color: #fff;
`;
