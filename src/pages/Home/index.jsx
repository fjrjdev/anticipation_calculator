import { useContext } from "react";
import Form from "../../components/Form";
import List from "../../components/List";
import {
  Container,
  FlexContainer,
  Box,
  FlexDiv,
} from "../../components/Static";
import { StyledTypo } from "../../components/Typograph/styles.js";
import { StatesContext } from "../../contexts/StateContext";

const Home = () => {
  const { loading } = useContext(StatesContext);
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
          <StyledTypo
            color="--primary-color"
            tag="h3"
            fontWeight={600}
            fontSize="md"
            fontStyle="Italic"
          >
            VOCÊ RECEBERÁ:
          </StyledTypo>
          {loading ? <p>Loading</p> : <List />}
        </FlexContainer>
      </Box>
    </Container>
  );
};

export default Home;
