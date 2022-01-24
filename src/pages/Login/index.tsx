import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../service/api";
import {
  Container,
  Main,
  Logo,
  Form,
  Label,
  Input,
  Button,
  Details,
} from "./styles";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (username === "" || password === "") return alert("Preencha os campos!");

    api
      .get("/user", {
        params: {
          username,
          password,
        },
      })
      .then((response) => {
        console.log(response);
        navigate("/home");
      })
      .catch((err) => {
        alert("Usuário não encontrado!");
      });
  }

  return (
    <Container>
      <Main>
        <Logo>Logo Aqui</Logo>
        <Form>
          <Label>USUÁRIO</Label>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label>SENHA</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Button type="submit" onClick={handleSubmit}>
            ENTRAR
          </Button>
        </Form>
        <Details></Details>
      </Main>
    </Container>
  );
}

export default Login;
