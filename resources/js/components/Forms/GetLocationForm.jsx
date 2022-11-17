import React from 'react'
import Button from '../misc/Button'
import InputField from '../InputField'

function GetLocationForm() {
  return (
    <form class="w-full max-w-sm">
        <InputField id = 'user_id' label='User Id' type='number' value={1}/>
         <Button>get current location</Button>
    </form>
  )
}

export default GetLocationForm