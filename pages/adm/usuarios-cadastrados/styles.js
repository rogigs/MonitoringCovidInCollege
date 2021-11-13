import styled from "styled-components";
import DESIGN_SYSTEM from "~/css/designSystem";

export const WrapperButton = styled.div`
  margin-bottom: ${DESIGN_SYSTEM.spaces.spaceSm} ${DESIGN_SYSTEM.spaces.spaceSm};
  display: flex;
  justify-content: end;

  button {
    width: 20%;
  }
`;
