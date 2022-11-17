import React from 'react'
import Label from './misc/Label'
import Input from './misc/Input'

export default function InputField(props) {
  const { 
    id ='',
    label='',
    type='text',
    value='',
    } = props;

  return (
    <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <Label>

      </Label>
      <label  for={id}>
        {label}
      </label>
    </div>
    <div class="md:w-2/3">
      <Input id={id} type={type} value={value} />
      
    </div>
  </div>
  )
}
