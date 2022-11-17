import React from 'react'
import Button from '../misc/Button'
import InputField from '../InputField'

function GetLocationForm() {
  return (
    <form class="w-full max-w-sm">
        <InputField id = 'user_id' label='User Id' type='number' value={1}/>
        <InputField id = 'latitude' label='Latitude' type='float' value={38.8951}/>
        <InputField id = 'Longitude' label='Longitude' type='float' value={-77.0364}/>
        <Button>Save Location</Button>
    </form>
  )
}

export default GetLocationForm
