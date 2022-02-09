import NavTop from "../NavTop";
import {
  Button,
  Container,
  Form,
  GroupInput,
  Input,
  Label,
  Main,
} from "./styles";

function NewProduct() {
  return (
    <Container>
      <NavTop />

      <Main>
        <Form>
          <GroupInput>
            <Label>Nome</Label>
            <Input />
            <Label>Preço</Label>
            <Input />
          </GroupInput>
          <Button>Adicionar</Button>
        </Form>
      </Main>
    </Container>
  );
}

export default NewProduct;
