import React from "react";
import PropTypes from "prop-types";
import { Button, CircularProgress } from "@material-ui/core";
import styled from "styled-components";
import DESIGN_SYSTEM from "~/css/designSystem";

const ButtonStyled = styled(Button)`
  border-radius: ${DESIGN_SYSTEM.spaces.spaceXxs};
  width: 100%;
`;

const ButtonMUI = ({
  children,
  variant,
  type,
  disabled = false,
  onClick,
  className,
  loading,
  ...props
}) => (
  <ButtonStyled
    variant={variant ?? "contained"}
    color="primary"
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={className}
    {...props}
  >
    {loading ? <CircularProgress color="inherit" size={24} /> : children}
  </ButtonStyled>
);

ButtonMUI.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.shape(PropTypes.object, PropTypes.string),
  props: PropTypes.shape(PropTypes.object),
};

export default ButtonMUI;
