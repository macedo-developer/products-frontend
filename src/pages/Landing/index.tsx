import Option from "../../components/Option";
import NavTop from "../NavTop";
import { Container, Main } from "./styles";

function Landing() {
  return (
    <Container>
      <NavTop />

      <Main>
        <Option title="Produto" page="/produto" description="Ver/Adicionar" />
        <Option title="Produto" page="/produto" description="Ver/Adicionar" />
        <Option title="Produto" page="/produto" description="Ver/Adicionar" />
        <Option title="Produto" page="/produto" description="Ver/Adicionar" />
        <Option title="Produto" page="/produto" description="Ver/Adicionar" />
        <Option title="Produto" page="/produto" description="Ver/Adicionar" />
        <Option title="Produto" page="/produto" description="Ver/Adicionar" />
        <Option
          title="Venda"
          page="/venda"
          description="Adicionar nova venda"
        />
      </Main>
    </Container>
  );
}

export default Landing;
