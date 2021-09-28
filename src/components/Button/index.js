import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  width: 100%;
`;

const ButtonMUI = ({ children, variant, type, disabled = false, props }) => (
  <ButtonStyled
    variant={variant ?? "contained"}
    color="primary"
    type={type}
    disabled={disabled}
    {...props}
  >
    {children}
  </ButtonStyled>
);

ButtonMUI.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  props: PropTypes.shape(PropTypes.object),
};

export default ButtonMUI;
