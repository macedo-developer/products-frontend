import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 3.4rem;
  background: #ccc;

  @media (min-width: 768px) {
    width: 40rem;
    height: auto;
  }
`;

export const Logo = styled.div`
  padding: 5rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 7%;
`;

export const Label = styled.label`
  padding: 0.8rem 0 0.5rem 0;
  font: 700 1.2rem "Ubuntu Mono";
`;

export const Input = styled.input`
  height: 3.2rem;
  margin-bottom: 1.5rem;
  border: 0 none;
  outline: 0;
  border-radius: 0.3rem;
  padding: 0.3rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 3.5rem;
  outline: 0;
  border: 0 none;
  border-radius: 0.3rem;
  background: green;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #02a600;
  }
`;

export const Details = styled.div``;
