import { Link } from "react-router-dom";
import { Container, Description, Infos, Title } from "./styles";

interface OptionProps {
  title: string;
  page: string;
  description: string;
}

const Option: React.FC<OptionProps> = (props) => {
  return (
    <Container>
      <Link to={props.page}>
        <Infos>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
        </Infos>
      </Link>
    </Container>
  );
};

export default Option;
