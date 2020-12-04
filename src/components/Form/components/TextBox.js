import React from "react";
import { Label, Input, FormGroup } from "reactstrap";
function TextBox({ label, onChange, _key, placeholder, value, error }) {
  return (
    <FormGroup>
      <Label for="exampleEmail">{label}</Label>
      <Input
        className={typeof error !== "undefined" ? "is-invalid" : ""}
        value={value}
        onChange={(e) => {
          onChange({ value: e.target.value, _key });
        }}
        placeholder={placeholder}
      />
      <div class="invalid-feedback">{error}</div>
    </FormGroup>
  );
}
export default TextBox;
