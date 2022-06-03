import React from "react";
import MainLayout from "../components/mainLayout";
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
              <Marker key={eqs.properties.PARK_ID} position={{lat:eqs.geometry.coordinates[1],
                                              lng:eqs.geometry.coordinates[0]}} />
          
          ))}
        </GoogleMap>
  );

}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App(){

  return (
  
  <MainLayout pageId="main">
    <div style={{width: "100vw", height: "100vh"}}>
    <WrappedMap 
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC6AkWYmepjFpXsxTkHKjCYRHWQTC9FWQc"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    />

  </div>
  );
  </MainLayout>
}

