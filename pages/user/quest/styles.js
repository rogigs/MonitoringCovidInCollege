import styled from "styled-components";
import DESIGN_SYSTEM from "~/css/designSystem";
import media from "~/css/styledMedias";

export const Box = styled.div`
  .container {
    border: 1px solid #ccc;
    border-radius: ${DESIGN_SYSTEM.spaces.spaceXxs};
    box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.15);
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

export const WrapperRadios = styled.div`
  border-radius: ${DESIGN_SYSTEM.spaces.spaceXxs};
  border: 1px solid #ccc;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  margin-bottom: ${DESIGN_SYSTEM.spaces.space};
  padding: ${DESIGN_SYSTEM.spaces.spaceXs};
  padding-left: ${DESIGN_SYSTEM.spaces.space};
  width: 100%;

  .label {
    min-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Card = styled.div`
  border-radius: ${DESIGN_SYSTEM.spaces.spaceXxs};
  border: 1px solid #ccc;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.15);
  padding: ${DESIGN_SYSTEM.spaces.spaceSm};
  margin-bottom: ${DESIGN_SYSTEM.spaces.spaceSm};
  overflow: hidden;

  > * {
    &:first-child {
      text-align: center;
      margin-bottom: ${DESIGN_SYSTEM.spaces.space};
    }
  }
`;
