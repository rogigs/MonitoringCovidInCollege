import styled from "styled-components";
import DESIGN_SYSTEM from "~/css/designSystem";
import media from "~/css/styledMedias";

export const WrapperButton = styled.div`
  margin-bottom: ${DESIGN_SYSTEM.spaces.spaceSm} ${DESIGN_SYSTEM.spaces.spaceSm};
  display: flex;
  justify-content: end;

  ${media.greaterThan("tablet")`
    button {
      width: 20%;
    }
      
  `}
`;
