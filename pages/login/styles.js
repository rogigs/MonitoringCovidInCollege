import styled from "styled-components";
import media from "~/css/styledMedias";
import DESIGN_SYSTEM from "~/css/designSystem";

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

export const WrapperField = styled.div`
  margin-bottom: ${DESIGN_SYSTEM.spaces.spaceSm};
`;

export const WrapperButton = styled.div`
  padding-top: ${DESIGN_SYSTEM.spaces.spaceSm};

  ${media.greaterThan("tablet")`
      margin: 0 auto;
      width: 50%;
  `}
`;
