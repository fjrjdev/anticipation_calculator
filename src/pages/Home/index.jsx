import Form from "../../components/Form";
import List from "../../components/List";
import {
  Container,
  FlexContainer,
  Box,
  FlexDiv,
} from "../../components/Static";
import Typograph from "../../components/Typograph";

const Home = () => {
  return (
    <Container>
      <Box>
        <FlexDiv>
          <Typograph text="Simule sua Antecipação"></Typograph>
          <Form />
        </FlexDiv>
        <FlexContainer>
          <h3>VOCÊ RECEBERÁ:</h3>
          <List />
        </FlexContainer>
      </Box>
    </Container>
  );
};

export default Home;
