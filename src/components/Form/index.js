import React, { useState, useEffect } from "react";
import { TextBox, RadioGroup, CheckBoxGroup } from "./components";
import { Card, CardBody, Button, CardFooter } from "reactstrap";
import validate from "./utils/validate";
import getData from "./utils/getData";
function Form({ formId }) {
  const [data, setData] = useState(null);
  const [error,setError]=useState(null);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  useEffect(() => {
    const response = getData(formId);
    if (response) {
      setData(response);
    }else{
      setError('Something went wrong.')
    }
  }, [formId]);

  const onChange = ({ questionId, value }) => {
    setErrors({});
    setValues({ ...values, [questionId]: value });
  };
  const done = () => {
    const errors = validate({ fields: data.fields, values });
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    alert(JSON.stringify(values));
  };
  if(error) return error;
  if (!data) return "loading...";

  return (
    <Card>
      <CardBody>
        {data.fields.map(({ type, questionId, ...props }) => {
          if (type === "TEXTBOX") {
            return (
              <TextBox
                {...props}
                key={questionId}
                questionId={questionId}
                error={errors[questionId]}
                onChange={onChange}
                value={values[questionId]}
              />
            );
          }
          if (type === "CHECKBOX_GROUP") {
            return (
              <CheckBoxGroup
                {...props}
                key={questionId}
                questionId={questionId}
                error={errors[questionId]}
                onChange={onChange}
                values={values[questionId]}
              />
            );
          }
          if (type === "RADIO_GROUP") {
            return (
              <RadioGroup
                {...props}
                key={questionId}
                questionId={questionId}
                error={errors[questionId]}
                onChange={onChange}
                value={values[questionId]}
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
