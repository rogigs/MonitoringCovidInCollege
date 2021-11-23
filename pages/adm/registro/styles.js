import styled from "styled-components";
import media from "~/css/styledMedias";
import DESIGN_SYSTEM from "~/css/designSystem";

export const Box = styled.div`
  .title {
    text-align: center;
    margin-bottom: ${DESIGN_SYSTEM.spaces.spaceSm};
  }

  form {
    padding-top: ${DESIGN_SYSTEM.spaces.space};
  }
`;

export const WrapperField = styled.div`
  margin-bottom: ${DESIGN_SYSTEM.spaces.spaceSm};
`;

export const WrapperTopButton = styled.div`
  margin: ${DESIGN_SYSTEM.spaces.spaceSm} 0 ${DESIGN_SYSTEM.spaces.spaceSm} 0;
  display: flex;
  justify-content: end;

  ${media.greaterThan("tablet")`
    button {
      width: 35%;
    }
      
  `}
`;

export const WrapperButton = styled.div`
  .reset {
    margin-top: ${DESIGN_SYSTEM.spaces.spaceSm};
  }

  ${media.greaterThan("tablet")`
      margin: 0 auto;
      width: 50%;
  `}
`;

export const WrapperButtonExcel = styled.div`
  margin: ${DESIGN_SYSTEM.spaces.space} 0 ${DESIGN_SYSTEM.spaces.spaceSm} 0;
  background-color: #fff;

  border: 1px solid #000;
  border-style: dotted;

  font-weight: 300;
  min-height: 200px;

  p {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: burlywood;
    height: 100%;
  }
`;
