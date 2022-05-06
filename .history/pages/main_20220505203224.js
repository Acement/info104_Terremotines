
import MainLayout from "../components/mainLayout";
import React, { useState } from "react";
import markersA from "../public/data/marcadores.json"
import{
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
const API_KEY= "AIzaSyC6AkWYmepjFpXsxTkHKjCYRHWQTC9FWQc";

import MStyles from "./MStyles";
const mapContainerStyle ={
  width: "100vw",
  height: "100vh",

};
const libraries = ["places"];
const centro ={
  lat: 0.000000,
  lng: 0.000000,
};
const options={
  styles: MStyles,
  disableDefaultUI: true,
};

export default function main() {

    const {isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: API_KEY,
      libraries,
    });
  const PruebaLatLng = { lat: -25.363, lng: 131.044 };
  const [markers,setMarkers]= React.useState([]);
  const [selected,setSelected]= React.useState(null);
  if (loadError) return "error al cargar mapa";
  if (!isLoaded) return  "Cargando el mapa";

  const Mrks = [
    ["Terremoto 1",-25.363,131.044],
    ["Terremoto 2", 25.363,131.044,],
    ["Terremoto 3",-28.363,131.044,],
    ["Terremoto 4",-29.363,131.044,],
    ["Terremoto 5",-23.363,131.044,],
    ["Terremoto 6",-50.363,131.044,],
    ["Terremoto 7",-80.363,131.044,],

    
  ];

  for(let i= 0; i<Mrks.length; i++){
    <marker position={{lat: Mrks[1], lng:Mrks[3]}}></marker>
  }


  return (
    <MainLayout pageId="main">
      <h1 
      >Terremotos </h1>
      <GoogleMap 
      mapContainerStyle={mapContainerStyle} 
      zoom= {3}
      center={centro}
      options={options}
      onClick={(event)=>{
        setMarkers(current=>[...current,{
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time : new Date(),
          

        }]);
      }}

      >
      

      <Marker position={{lat:Mrks[1], lng: Mrks[2]}}> </Marker>
      {markers.map((marker)=>(
        <Marker 
        key={marker.time.toISOString()} 
        position={{lat: marker.lat, lng: marker.lng}} 
        onClick={()=>{
          setSelected(marker);
        }}

        />
      ))} 
      {selected ? (
        <InfoWindow position={{lat: selected.lat, lng:selected.lng}} onCloseClick={()=>
        {setSelected(null)}}>
          <div>
            <h2>Terremoto!</h2>
          </div>
      </InfoWindow>
      ) : null}
      </GoogleMap>

      

    </MainLayout>
  );
}
