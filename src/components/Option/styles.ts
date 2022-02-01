import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: red;
  cursor: pointer;
  transition: width 0.6s ease-out;

  &:hover {
    width: 110%;
  }

  > a {
    width: 100%;
    heigth: 100%;
    text-decoration: none;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  text-decoration: none;
`;

export const Description = styled.span``;
