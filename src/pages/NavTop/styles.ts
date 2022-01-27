import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 10rem;
  background: #cccccc;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  align-items: center;
`;

export const Logo = styled.div``;

export const ButtonOff = styled.button`
  width: 5rem;
  height: 5rem;
  border: 0 none;
  border-radius: 0.3rem;
  background: transparent;
  transition: background 0.5s ease;
  cursor: pointer;

  &:hover {
    background: red;
  }
`;

export const ImgPower = styled.img``;
