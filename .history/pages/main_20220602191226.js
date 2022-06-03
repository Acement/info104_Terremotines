import React from "react";
import MainLayout from "../components/mainLayout";
import mapStyles from "../pages/MStyles";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import Mag from "../public/data/magnitud.json";
import Exp from "../public/data/caros.json";
import Mor from "../public/data/victimas.json";



function Map(){
  return (
    <MainLayout pageId="main">
        <GoogleMap 
          defaultZoom={3} 
          defaultCenter={{lat: 0,lng:0}} 
          defaultOptions= {{styles: mapStyles }}
        >
          {Mag.Terremotos.map((EqMag)=>(
              <Marker key={EqMag.Datos.EQ_ID} position={{lat:EqMag.geometry.coordinates[0],
                                              lng:EqMag.geometry.coordinates[1]}} />
          
          ))}
          {Mor.Terremotos.map((EqMag)=>(
              <Marker key={EqMag.Datos.EQ_ID} position={{lat:EqMag.geometry.coordinates[0],
                                              lng:EqMag.geometry.coordinates[1]}} />
          
          ))}
        </GoogleMap>
  </MainLayout>
  );

}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App(){

  return (
  
  <div style={{width: "100vw", height: "100vh"}}>
    <WrappedMap 
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC6AkWYmepjFpXsxTkHKjCYRHWQTC9FWQc"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    />

  </div>
  );

}

