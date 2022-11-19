import { useContext } from "react";
import { StatesContext } from "../../contexts/StateContext";
import { StyledTypo } from "../Typograph/styles";
import { StyledUl } from "./styles";

const List = () => {
  const { data } = useContext(StatesContext);

  return data?.length === 0 ? (
    <StyledUl>
      <li>
        <StyledTypo
          tag="h3"
          fontWeight={400}
          fontSize="md"
          color="--sub-color"
          fontStyle="Italic"
        >
          Amanhã R$: 0,00
        </StyledTypo>
      </li>
      <li>
        <StyledTypo
          tag="h3"
          fontWeight={400}
          fontSize="md"
          color="--sub-color"
          fontStyle="Italic"
        >
          Em 15 dias: R$: 0,00
        </StyledTypo>
      </li>
      <li>
        <StyledTypo
          tag="h3"
          fontWeight={400}
          fontSize="md"
          color="--sub-color"
          fontStyle="Italic"
        >
          Em 30 dias: R$: 0,00
        </StyledTypo>
      </li>
      <li>
        <StyledTypo
          tag="h3"
          fontWeight={400}
          fontSize="md"
          color="--sub-color"
          fontStyle="Italic"
        >
          Em 90 dias: R$: 0,00
        </StyledTypo>
      </li>
    </StyledUl>
  ) : (
    <StyledUl>
      {data?.map((elem, index) => (
        <li key={index}>
          {elem.days === "1" ? (
            <StyledTypo
              tag="h3"
              fontWeight={400}
              fontSize="md"
              color="--sub-color"
              fontStyle="Italic"
            >
              Amanhã R$: {elem.values},00
            </StyledTypo>
          ) : (
            <StyledTypo
              tag="h3"
              fontWeight={400}
              fontSize="md"
              color="--sub-color"
              fontStyle="Italic"
            >
              Em {elem.days} dias: R$ {elem.values},00
            </StyledTypo>
          )}
        </li>
      ))}
    </StyledUl>
  );
};
export default List;
