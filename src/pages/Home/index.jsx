import Form from "../../components/Form";
import List from "../../components/List";
import { Container, FlexContainer, Box } from "../../components/Static";

const Home = () => {
  return (
    <Container>
      <Box>
        <div>
          <h1>Simule sua Antecipação</h1>
          <Form />
        </div>
        <FlexContainer>
          <h3>VOCÊ RECEBERÁ:</h3>
          <List />
        </FlexContainer>
      </Box>
    </Container>
  );
};

export default Home;
