import styled, { css } from "styled-components";
import Typograph from ".";

export const StyledTypo = styled(Typograph)`
  font-weight: ${({ fontWeight }) => fontWeight};
  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 40px;
          @media (max-width: 800px) {
            font-size: 36px;
          }
          @media (max-width: 420px) {
            font-size: 32px;
          }
        `;
      case "slg":
        return css`
          font-size: 24px;
        `;
      case "md":
        return css`
          font-size: 20px;
        `;
      case "sm":
        return css`
          font-size: 16px;
        `;
    }
  }}
`;
