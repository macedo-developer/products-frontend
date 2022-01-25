import { ButtonOff, Container, ImgPower, Logo, Main } from "./styles";

import powerImg from "../../assets/power.svg";

function NavTop() {
  return (
    <Container>
      <Main>
        <Logo>Logo Aqui</Logo>

        <ButtonOff>
          <ImgPower src={powerImg} />
        </ButtonOff>
      </Main>
    </Container>
  );
}

export default NavTop;
