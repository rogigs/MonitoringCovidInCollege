import styled from "styled-components";
import media from "../../../../../css/styledMedias";

export const Box = styled.div`
  .container {
    border: 1px solid #ccc;
    padding: 16px;
  }

  .centralize {
    text-align: center;
    margin-bottom: 16px;
  }

  .quest {
    width: 100%;
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

export const BoxRadios = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

export const WrapperField = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  margin-bottom: 8px;

  .label {
    min-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const WrapperButton = styled.div`
  padding-top: 16px;

  ${media.greaterThan("tablet")`
      margin: 0 auto;
      width: 50%;
  `}
`;
