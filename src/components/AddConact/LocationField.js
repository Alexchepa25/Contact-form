import React from 'react';
import TextField from './TextField';

    
    const LocationField = ({...rest}) => (
     
      <TextField name="location"
                  label="Location:"
                  className="location"              
                  {...rest} 
                  />
     
    );


export default LocationField
