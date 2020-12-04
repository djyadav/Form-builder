const validate = ({ fields, values }) => {
  let errors = {};
  fields.forEach(({ _key, type, mandatory, contentType, ...field }) => {
    if (
      (mandatory && typeof values[_key] === "undefined") ||
      typeof values[_key] === "null"
    ) {
      errors[_key] = "Mandatory";
      return;
    }
    switch (type) {
      case "TEXTBOX": {
        if (mandatory && values[_key].length < 1) {
          errors[_key] = "Mandatory";
          break;
        }
        if (contentType === "number" && isNaN(values[_key])) {
          errors[_key] = "Invalid Input.";
          break;
        }
        if (
          contentType === "number" &&
          typeof field.min !== "undefined" &&
          Number(values[_key]) < field.min
        ) {
          errors[_key] = `Value should be >= ${field.min}`;
          break;
        }
      }
      case "CHECKBOX_GROUP": {
        if (values[_key].length < 1) {
          errors[_key] = "Mandatory";
        }
        break;
      }
      case "RADIO_GROUP": {
        break;
      }
    }
    return;
  });
  return errors;
};
export default validate;
