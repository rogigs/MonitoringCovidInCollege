import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  width: 100%;
`;

const ButtonMUI = ({ name, text, type }, props) => (
  <ButtonStyled
    variant={text ?? "contained"}
    color="primary"
    type={type}
    {...props}
  >
    {name}
  </ButtonStyled>
);

ButtonMUI.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  type: PropTypes.string,
  props: PropTypes.shape(PropTypes.object),
};

export default ButtonMUI;
