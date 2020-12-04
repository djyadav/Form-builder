import React, { useState, useEffect } from "react";
import { TextBox, RadioGroup, CheckBoxGroup } from "./components";
import { Card, CardBody, Button, CardFooter } from "reactstrap";
import validate from "./utils/validate";
import getData from "./utils/getData";
function Form({ formId }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const response = getData(formId);
    if (response) {
      setData(response);
    }
  }, [formId]);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const onChange = ({ _key, value }) => {
    setErrors({});
    setValues({ ...values, [_key]: value });
  };
  const done = () => {
    const errors = validate({ fields: data.fields, values });
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    alert(JSON.stringify(values));
  };
  if (!data) return "loading...";

  return (
    <Card>
      <CardBody>
        {data.fields.map(({ type, _key, ...props }) => {
          if (type === "TEXTBOX") {
            return (
              <TextBox
                {...props}
                key={_key}
                _key={_key}
                error={errors[_key]}
                onChange={onChange}
                value={values[_key]}
              />
            );
          }
          if (type === "CHECKBOX_GROUP") {
            return (
              <CheckBoxGroup
                {...props}
                key={_key}
                _key={_key}
                error={errors[_key]}
                onChange={onChange}
                values={values[_key]}
              />
            );
          }
          if (type === "RADIO_GROUP") {
            return (
              <RadioGroup
                {...props}
                key={_key}
                _key={_key}
                error={errors[_key]}
                onChange={onChange}
                value={values[_key]}
              />
            );
          }
          return "Incompatible Type.";
        })}
      </CardBody>
      <CardFooter>
        <Button onClick={done}>Done</Button>
      </CardFooter>
    </Card>
  );
}
export default Form;
