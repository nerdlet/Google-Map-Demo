import React from 'react';
import './App.css';
import { Typography } from '@material-ui/core';
import Map from './component/Map';

function App() {
  return (
    <div className="App">
      <Typography variant="h4">Google Map</Typography>
      <Map 
        id="myMapDiv"
        options={{
          center:{ lat: -25.344, lng: 131.036 },
          zoom: 4
        }}
        onMapLoad={map => {
          map.addListener("dragend", () => {
            const newCenter = map.getCenter()
            console.log(newCenter.lng(), newCenter.lat())
          })
        }}
       />
    </div>
  );
}

export default App;
