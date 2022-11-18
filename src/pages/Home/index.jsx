import Form from "../../components/Form";
import List from "../../components/List";
import {
  Container,
  FlexContainer,
  Box,
  FlexDiv,
} from "../../components/Static";
import { StyledTypo } from "../../components/Typograph/styles.js";

const Home = () => {
  return (
    <Container>
      <Box>
        <FlexDiv>
          <StyledTypo tag="h1" fontWeight={500} fontSize="lg">
            Simule sua Antecipação
          </StyledTypo>
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
