import React,{ useEffect } from 'react';
import PropTypes from 'prop-types';

function Map({id, options, onMapLoad}){
  const onGoogleMapLoad = () => {
    const map = new window.google.maps.Map(
      document.getElementById(id), {
        options
      },  
    )
    onMapLoad(map)
  }

  useEffect( () => {
      if(!window.google){
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}`;
        var appendScript = document.getElementsByTagName('head')[0].appendChild(script);
        script.parentNode.insertBefore(script, appendScript)
    
        script.addEventListener('load', e =>{
          onGoogleMapLoad()
        })
      } else {
        onGoogleMapLoad()
      }
  })
  //callback, useref
  console.log("TEST MAP")
  return (
    <div style={{width:'100%', height:"500px"}} id={id}/>
  )
}

Map.propTypes = {
  id: PropTypes.string,
  options: PropTypes.shape({}),
  onMapLoad: PropTypes.func
}

export default Map;