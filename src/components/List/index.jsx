import { useContext } from "react";
import { StatesContext } from "../../contexts/StateContext";
import { StyledTypo } from "../Typograph/styles";

const List = () => {
  const { data, loading } = useContext(StatesContext);
  console.log(data, loading);

  return data?.length === 0 ? (
    <ul>
      <li>
        <StyledTypo tag="h3" fontWeight={400} fontSize="md" color="--sub-color">
          Amanhã R$: 0.00
        </StyledTypo>
        <StyledTypo tag="h3" fontWeight={400} fontSize="md" color="--sub-color">
          Em 15 dias: R$: 0.00
        </StyledTypo>
        <StyledTypo tag="h3" fontWeight={400} fontSize="md" color="--sub-color">
          Em 30 dias: R$: 0.00
        </StyledTypo>
        <StyledTypo tag="h3" fontWeight={400} fontSize="md" color="--sub-color">
          Em 90 dias: R$: 0.00
        </StyledTypo>
      </li>
    </ul>
  ) : (
    <ul>
      {data?.map((elem, index) => {
        console.log(elem);
        return (
          <li key={index}>
            <StyledTypo
              tag="h3"
              fontWeight={400}
              fontSize="md"
              color="--sub-color"
            >
              `Em ${elem.days} R$:${elem.values}`
            </StyledTypo>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
