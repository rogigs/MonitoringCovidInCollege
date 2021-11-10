import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import PropTypes from "prop-types";

const RadioMUI = ({ radios, row = false, field, ...props }) => (
  <RadioGroup row={row} {...field} {...props}>
    {radios.map((radioOption) => (
      <FormControlLabel
        key={`radio-${radioOption.label}`}
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
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    },
  ]).isRequired,
  row: PropTypes.bool,
  field: PropTypes.shape(PropTypes.object),
};

export default RadioMUI;
