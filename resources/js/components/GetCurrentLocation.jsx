import React from 'react'

import Button from './misc/Button'
import Greeting from './Greeting'
import DisplayCurrentLocation from './DisplayCurrentLocation';
import {apiPrefix} from '../config';
import axios from 'axios';


function GetCurrentLocation(props) {
  const {isLoggedIn, user} = props 

  const [currentLocation, setCurrentLocation] = React.useState({id:'',latitude:'',longitude:''});


const handleSubmitButton = (event) => {
  event.preventDefault();

  axios.get(`${apiPrefix}/users/${user.id}/current`)
        .then((res)=>setCurrentLocation(res.data.data))
        .then((err)=> handleError(err))    
    
}


const handleError = (err) => {
  console.log(err)
  
};
    
  if(isLoggedIn) {
    return (
      <div>
        <form className="w-full max-w-sm">
        <div className='text-justify'>
          <h2 className='text-lg'>
            <Greeting name={user.name} message={'Use following button to get your latest saved location'} />
          </h2>
                  
        </div>
                 
           <Button type='submit' onClick={(e) => handleSubmitButton(e)}>get location</Button>
      </form>

      <DisplayCurrentLocation location = {currentLocation}/>
      </div>
      
      
    )
  }
  return (
    <div>{}</div>
  )
 
}

export default GetCurrentLocation