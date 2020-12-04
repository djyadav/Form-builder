import React from "react";
import { Label, Input, FormGroup } from "reactstrap";
function TextBox({ label, onChange, questionId, placeholder, value, error }) {
  return (
    <FormGroup>
      <Label for="exampleEmail">{label}</Label>
      <Input
        className={typeof error !== "undefined" ? "is-invalid" : ""}
        value={value}
        onChange={(e) => {
          onChange({ value: e.target.value, questionId });
        }}
        placeholder={placeholder}
      />
      <div class="invalid-feedback">{error}</div>
    </FormGroup>
  );
}
export default TextBox;
