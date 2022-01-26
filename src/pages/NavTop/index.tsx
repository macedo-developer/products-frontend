import { ButtonOff, Container, ImgPower, Logo, Main } from "./styles";

import ImgPowerOff from "../../assets/power.svg";

function NavTop() {
  return (
    <Container>
      <Main>
        <Logo>Logo Aqui</Logo>

        <ButtonOff>
          <ImgPower src={ImgPowerOff} />
        </ButtonOff>
      </Main>
    </Container>
  );
}

export default NavTop;
