import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

const TextFielStyled = styled(TextField)`
  width: 100%;
`;

const TextFieldMUI = (props) => <TextFielStyled variant="filled" {...props} />;

TextFieldMUI.propTypes = {
  props: PropTypes.shape(PropTypes.object),
};

export default TextFieldMUI;
