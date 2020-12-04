const validate = ({ fields, values }) => {
  let errors = {};
  fields.forEach(({ questionId, type, mandatory, contentType, ...field }) => {
    if (
      (mandatory && typeof values[questionId] === "undefined") ||
      typeof values[questionId] === "null"
    ) {
      errors[questionId] = "Mandatory";
      return;
    }
    switch (type) {
      case "TEXTBOX": {
        if (mandatory && values[questionId].length < 1) {
          errors[questionId] = "Mandatory";
          break;
        }
        if (contentType === "number" && isNaN(values[questionId])) {
          errors[questionId] = "Invalid Input.";
          break;
        }
        if (
          contentType === "number" &&
          typeof field.min !== "undefined" &&
          Number(values[questionId]) < field.min
        ) {
          errors[questionId] = `Value should be >= ${field.min}`;
          break;
        }
      }
      case "CHECKBOX_GROUP": {
        if (values[questionId].length < 1) {
          errors[questionId] = "Mandatory";
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
