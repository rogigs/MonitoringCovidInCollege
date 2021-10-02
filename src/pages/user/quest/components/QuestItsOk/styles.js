import styled from "styled-components";
import media from "../../../../../css/styledMedias";

export const Box = styled.div`
  .container {
    border: 1px solid #ccc;
    padding: 16px;
  }

  .centralize {
    text-align: center;
  }

  ${media.greaterThan("tablet")`
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;

      .container {
        width: 50%;
      }
  `}
`;

export const WrapperField = styled.div`
  margin-bottom: 16px;
`;

export const WrapperButton = styled.div`
  ${media.greaterThan("tablet")`
      margin: 0 auto;
      width: 50%;
  `}
`;
