import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import * as mrks from "../public/data/marcadores.json";


function Map(){
  return (
  <GoogleMap 
    defaultZoom={3} 
    defaultCenter={{lat: 0,lng:0}} 
  >
    {mrks.features.map((eqs)=>(
        <marker key={eqs.id} position={{lat:eqs.latitud, lng:eqs.longitud}} />
    
    ))}
   </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App(){

  return (<div style={{width: "100vw", height: "100vh"}}>
    <WrappedMap 
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC6AkWYmepjFpXsxTkHKjCYRHWQTC9FWQc"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    />

  </div>
  );

}

