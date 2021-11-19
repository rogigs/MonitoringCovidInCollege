import styled from "styled-components";
import DESIGN_SYSTEM from "~/css/designSystem";

export const Card = styled.div`
  border-radius: ${DESIGN_SYSTEM.spaces.spaceXxs};
  border: 1px solid #ccc;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.15);
  padding: ${DESIGN_SYSTEM.spaces.spaceSm};
  margin-bottom: ${DESIGN_SYSTEM.spaces.spaceSm};
  overflow: hidden;
`;
