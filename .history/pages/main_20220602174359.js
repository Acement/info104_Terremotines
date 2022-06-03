import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";


function Map(){
  return (
  <GoogleMap 
    defaultZoom={3} 
    defaultCenter={{lat: 0,lng:0}} 
  />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App(){

  return (<div style={{width: "100vw", height: "100vh"}}>
    <WrappedMap GoogleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_MY_API_KEY'}
        loadingElement={<div style={{height: "100%"}} />}
        containerElement={<div style={{height:"100%" }}/>}
        mapElement={<div style={{height:"100%"}}/>}
    />

  </div>
  );

}

