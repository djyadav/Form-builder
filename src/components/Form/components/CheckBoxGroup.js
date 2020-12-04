import React from 'react';
import {Label,Input,FormGroup } from 'reactstrap';
function CheckBoxGroup({label,onChange,options,_key,values=[],error}){
  const localOnChange=(e)=>{
    const value=e.target.value;
    values=[...values]
    if(values.indexOf(value)>-1){
      values.splice(values.indexOf(value),1)
    }else{
      values.push(value)
    }
    onChange({_key,value:values})
  }
  return (
    <FormGroup>
      <Label>{label}</Label>
       {options.map(({label,value})=>{
        return (
          <FormGroup check>
          <Label check>
            <Input onChange={localOnChange} value={value} type="checkbox" name={_key} />{' '}
          {label}
          </Label>
          </FormGroup>
        )
       })}
          {error &&  <div class="text-danger">{error}</div>}
     </FormGroup>
  )
}
export default CheckBoxGroup;
