/* eslint-disable react/require-default-props */
import { Checkbox, FormControlLabel } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const CheckboxMUI = ({ label, onChange, value, props }) => (
  <FormControlLabel
    control={<Checkbox />}
    onChange={(e) => onChange(e.target.checked)}
    checked={value}
    label={label}
    {...props}
  />
);

CheckboxMUI.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.bool,
  props: PropTypes.shape(PropTypes.object),
};

export default CheckboxMUI;
