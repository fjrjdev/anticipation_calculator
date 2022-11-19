import styled from "styled-components";
import { SrcLoading } from ".";
export const Loading = styled(SrcLoading)`
  width: 100%;
  margin: auto;

  animation: spinner 4s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
