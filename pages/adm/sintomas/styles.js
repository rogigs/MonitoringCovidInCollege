import styled from "styled-components";
import media from "~/css/styledMedias";
import DESIGN_SYSTEM from "~/css/designSystem";

export const WrapperField = styled.div`
  margin-bottom: ${DESIGN_SYSTEM.spaces.spaceSm};
  margin-top: ${DESIGN_SYSTEM.spaces.spaceSm};
`;

export const WrapperTopButton = styled.div`
  margin-bottom: ${DESIGN_SYSTEM.spaces.spaceSm} ${DESIGN_SYSTEM.spaces.spaceSm};
  display: flex;
  justify-content: end;

  ${media.greaterThan("tablet")`
    button {
      width: 35%;
    }
      
  `}
`;

export const WrapperButton = styled.div`
  margin-bottom: ${DESIGN_SYSTEM.spaces.space};

  ${media.greaterThan("tablet")`
      margin: 0 auto;
      width: 50%;
  `}
`;
