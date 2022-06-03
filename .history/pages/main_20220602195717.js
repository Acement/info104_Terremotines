import React, { useState } from "react";
import MainLayout from "../components/mainLayout";
import mapStyles from "../pages/MStyles";
import IconMor from "../public/death.svg";
import {
  withScriptjs,
  withGoogleMap,
  InfoWindow,
  GoogleMap,
  Marker,
} from "react-google-maps";

import Mag from "../public/data/magnitud.json";
import Exp from "../public/data/caros.json";
import Mor from "../public/data/victimas.json";
import { color, Icon } from "@chakra-ui/react";



function Map(){
  const [SelectedMarker,setSelectedMarker]= useState(null);
  return (
    <MainLayout pageId="main">
        <GoogleMap 
          defaultZoom={3} 
          defaultCenter={{lat: 0,lng:0}} 
          defaultOptions= {{styles: mapStyles }}
        >
          {Mag.Terremotos.map((EqMag)=>(
              <Marker key={EqMag.Datos.EQ_ID} 
                      position={{lat:EqMag.geometry.coordinates[0],
                                lng:EqMag.geometry.coordinates[1]}}
                      onClick={()=>
                          {setSelectedMarker(EqMag);
                      }}

                                               />
          
          ))}
          {Mor.Terremotos.map((EqMor)=>(
              <Marker key={EqMor.Datos.EQ_ID} 
                      position={{lat:EqMor.geometry.coordinates[0],
                                lng:EqMor.geometry.coordinates[1]}} 
                      onClick={()=>
                          {setSelectedMarker(EqMor);
                      }}
                      icon={{
                        URL: "/death.svg"
                      }}
                        />

          ))}
          {Exp.Terremotos.map((EqExp)=>(
              <Marker key={EqExp.Datos.EQ_ID} 
                      position={{lat:EqExp.geometry.coordinates[0],
                                lng:EqExp.geometry.coordinates[1]}} 
                      onClick={()=>
                          {setSelectedMarker(EqExp);
                      }}
                      icon={{
                        url: IconMor
                      }}
                        />

          ))}
          {SelectedMarker &&<InfoWindow 
            position={{
              lat:SelectedMarker.geometry.coordinates[0],
              lng:SelectedMarker.geometry.coordinates[1]
              }}
              onClick= {()=>{
                setSelectedMarker(null);
              }}
              >
            <div>
              <b>{SelectedMarker.Datos.NAME}</b>
              <p>{SelectedMarker.Datos.INFO}</p>
            </div>
          </InfoWindow>
           }
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

