import React, {useState, useRef, useEffect} from 'react'
import Button from '../misc/Button'
import InputField from '../InputField'
import Greeting from '../Greeting'
import {apiPrefix} from '../../config';
import {patternValidator, validLatitudePattern, validLongitudePattern} from '../../utils';
import axios from 'axios';

function PostLocationForm(props) {

  const {isLoggedIn, user} = props 
  const validLatitude = (value) => patternValidator(validLatitudePattern, value);
  const validLongitude = (value) => patternValidator(validLongitudePattern, value);
  
  const [currentInputLocation, setCurrentInputLocation] = useState({latitude:'38.8951', longitude:'-77.0364'});
  
  const handleSubmitButton = (event) => {
    
    event.preventDefault();

    if(validLatitude(currentInputLocation.latitude) && 
            validLongitude(currentInputLocation.longitude)){
              let data ={'latitude':parseFloat(currentInputLocation.latitude),
                'longitude':parseFloat(currentInputLocation.longitude),
                'user_id': user.id}
                
          axios.post(`${apiPrefix}/users/${user.id}/locations`, data)
          .then((res)=>console.log('data successfully saved on server'))
          .then((err)=> console.log(err))   
            } else {
              console.log("Please fix your coordinates.")
            }
    
  }
  
  const handleOnChange = (e) => {
    const {name, value} = e.target;
    
    setCurrentInputLocation((prevState)=> ({
      ...prevState,
      [name]:value
    }))
  }
  
  if(isLoggedIn){
    return (
      <div>
        <Greeting name={user.name} message={'Use following form to saved your current location'} />
        <p>  For example, Washington DC has a latitude 38.8951 and longitude -77.0364. </p>
        <form className="w-full max-w-sm">
          <InputField id = 'latitude' label='Latitude' type='float' name='latitude'
              value={currentInputLocation.latitude} 
              onChange={(e) => handleOnChange(e)} 
              required
              />

          <InputField id = 'Longitude' label='Longitude' type='float' name='longitude'
              value={currentInputLocation.longitude} 
              onChange={(e)=> handleOnChange(e)}
              required
              />

          <Button type='submit' onClick={(e) => handleSubmitButton(e)} >Save Location</Button>
        </form>
      </div>
      
    )
  }
  return (
    <div>{}</div>
  )
}

export default PostLocationForm
