import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 10rem;
  background: #3D7A49;
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
  transition: background 0.6s ease-out;
  cursor: pointer;

  &:hover {
    background: #FA3834;
  }
`;

export const ImgPower = styled.img``;
