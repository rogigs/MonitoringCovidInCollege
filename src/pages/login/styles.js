import styled from "styled-components";

export const Box = styled.div`
  align-items: center;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  form {
    border: 1px solid #ccc !important;
    padding: 16px;
    width: 50%;
  }

  .centralize {
    text-align: center;
  }
`;

export const WrapperField = styled.div`
  margin-bottom: 16px;
`;

export const WrapperButton = styled.div`
  margin: 0 auto;
  width: 50%;
`;
