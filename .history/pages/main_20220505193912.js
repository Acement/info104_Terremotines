
import MainLayout from "../components/mainLayout";
import React, { useState } from "react";
import{
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import {formatRelative} from "date-fns";
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
  const [markers,setMarkers]= React.useState([]);
  const [selected,setSelected]= React.useState(null);
  if (loadError) return "error al cargar mapa";
  if (!isLoaded) return  "Cargando el mapa";


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
      {markers.map((marker)=>(
        <Marker 
        key={marker.time.toISOString()} 
        position={{lat: marker.lat, lng: marker.lng}} 
        onClick={()=>{
          setSelected(marker);
        }}

        />
      ))} 
      {selected ? (<InfoWindow>
        <div>
          <h2>Terremoto!</h2>
        </div>
      </InfoWindow>) : null}
      </GoogleMap>

    </MainLayout>
  );
}
