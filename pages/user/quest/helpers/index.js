const transformValuesRadiosInBoolean = (valuesRadio) =>
  Object.keys(valuesRadio).forEach(
    (values) => (valuesRadio[values] = valuesRadio[values] === "ok")
  );

export default transformValuesRadiosInBoolean;
