import {
  withScriptjs,
  withGoogleMap,
  InfoWindow,
  GoogleMap,
  Marker,
} from "react-google-maps";
import React, { useState } from "react";
import Mag from "../public/data/magnitud.json";
import Exp from "../public/data/caros.json";
import Mor from "../public/data/victimas.json";

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
              URL: "/money.svg"
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