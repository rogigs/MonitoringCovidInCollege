import styled from "styled-components";
import DESIGN_SYSTEM from "../../../css/designSystem";
import media from "../../../css/styledMedias";

export const Box = styled.div`
  .container {
    border: 1px solid #ccc;
    padding: ${DESIGN_SYSTEM.spaces.spaceSm};
  }

  .title {
    text-align: center;
    margin-bottom: ${DESIGN_SYSTEM.spaces.spaceSm};
  }

  ${media.greaterThan("tablet")`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
  
      .container {
        width: 50%;
      }
  `}
`;

export const BoxRadios = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperField = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  margin-bottom: ${DESIGN_SYSTEM.spaces.spaceXs};

  .label {
    min-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const WrapperButton = styled.div`
  ${media.greaterThan("tablet")`
      margin: 0 auto;
      width: 50%;
  `}
`;
