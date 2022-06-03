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
    <MainLayout pageId="main">
      <h1 
      >Terremotos </h1>
  <GoogleMap 
    defaultZoom={3} 
    defaultCenter={{lat: 0,lng:0}} 
  >
    {mrks.features.map((eqs)=>(
        <Marker key={eqs.properties.PARK_ID} position={{lat:eqs.geometry.coordinates[1],
                                        lng:eqs.geometry.coordinates[0]}} />
    
    ))}
   </GoogleMap>
  </MainLayout>
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

