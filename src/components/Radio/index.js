import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import PropTypes from "prop-types";

const RadioMUI = ({ radios, row = false, field }) => (
  <RadioGroup row={row} {...field}>
    {radios.map((radioOption) => (
      <FormControlLabel
        value={radioOption.value}
        control={<Radio />}
        label={radioOption.label}
      />
    ))}
  </RadioGroup>
);

RadioMUI.propTypes = {
  radios: PropTypes.arrayOf([
    {
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    },
  ]).isRequired,
  row: PropTypes.bool,
  field: PropTypes.shape(PropTypes.object),
};

export default RadioMUI;
