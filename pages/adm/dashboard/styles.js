import styled from "styled-components";
import media from "~/css/styledMedias";
import DESIGN_SYSTEM from "~/css/designSystem";

export const Box = styled.div`
  border-radius: ${DESIGN_SYSTEM.spaces.spaceXxs};
  border: 1px solid #ccc;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.15);
  padding: ${DESIGN_SYSTEM.spaces.spaceSm};
  margin-bottom: ${DESIGN_SYSTEM.spaces.spaceSm};
`;

export const WrapperButton = styled.div`
  display: grid;
  grid-gap: ${DESIGN_SYSTEM.spaces.space};
  grid-template-columns: 1fr 1fr;
`;
