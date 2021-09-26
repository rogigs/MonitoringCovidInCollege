/* eslint-disable react/require-default-props */
import { Checkbox, FormControlLabel } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const CheckboxMUI = ({ label }, props) => (
  <FormControlLabel control={<Checkbox />} label={label} {...props} />
);

CheckboxMUI.propTypes = {
  label: PropTypes.string.isRequired,
  props: PropTypes.shape(PropTypes.object),
};

export default CheckboxMUI;
