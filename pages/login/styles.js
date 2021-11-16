import styled from "styled-components";
import media from "~/css/styledMedias";
import DESIGN_SYSTEM from "~/css/designSystem";

export const WrappperMain = styled.main`
  display: grid;

  iframe {
    background-color: #3490dc;
    height: 0%;
    width: 0%;
  }

  ${media.greaterThan("tablet")`
      grid-template-columns: 1fr 1fr;

      iframe {
        height: 100%;
        width: 100%;
      }
  `}

  ${media.lessThan("tablet")`
      margin: 0 16px 0 16px;
  `}
`;

export const Box = styled.div`
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
