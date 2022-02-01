import { Link } from "react-router-dom";
import { Container, Description, Title } from "./styles";

interface OptionProps {
  title: string;
  page: string;
  description: string;
}

const Option: React.FC<OptionProps> = (props) => {
  return (
    <Container>
      <Link to={props.page}>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </Link>
    </Container>
  );
};

export default Option;
