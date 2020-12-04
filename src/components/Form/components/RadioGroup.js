import React from "react";
import { Label, Input, FormGroup } from "reactstrap";
function RadioGroup({ label, onChange, options, questionId, error }) {
  return (
    <FormGroup>
      <Label for="exampleEmail">{label}</Label>
      {options.map(({ label, value }) => {
        return (
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                value={value}
                onChange={(e) => {
                  onChange({ value: e.target.value, questionId });
                }}
                name={questionId}
              />{" "}
              {label}
            </Label>
          </FormGroup>
        );
      })}
      {error && <div class="text-danger">{error}</div>}
    </FormGroup>
  );
}
export default RadioGroup;
