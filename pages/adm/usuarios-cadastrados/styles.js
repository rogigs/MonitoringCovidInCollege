import styled from "styled-components";
import DESIGN_SYSTEM from "~/css/designSystem";
import media from "~/css/styledMedias";

export const WrapperButton = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: ${DESIGN_SYSTEM.spaces.space};

  ${media.greaterThan("tablet")`
    button {
      width: 20%;
    }
      
  `}
`;
