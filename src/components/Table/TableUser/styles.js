import styled from "styled-components";
import DESIGN_SYSTEM from "~/css/designSystem";

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: ${DESIGN_SYSTEM.spaces.spaceXxs};
  border: 1px solid #ccc;
  box-shadow: 2px 2px 2px -1px rgba(0, 0, 0, 0.15);
  margin-bottom: ${DESIGN_SYSTEM.spaces.spaceSm};
  padding: ${DESIGN_SYSTEM.spaces.spaceSm};
  width: 100%;

  thead {
    background-color: ${DESIGN_SYSTEM.colors.primary};
    text-transform: uppercase;
  }

  td,
  th {
    text-align: left;
    padding: ${DESIGN_SYSTEM.spaces.space};
  }

  tbody {
    tr:nth-child(odd) {
      background-color: #f0f0f0;
    }
  }
`;
