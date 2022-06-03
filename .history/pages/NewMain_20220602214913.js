

import MainLayout from "../components/mainLayout";
import React, { useState } from "react";
import{
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";



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
      googleMapsApiKey: process.env.NEXT_PUBLIC_MY_API_KEY,
      libraries,
    });
  const PruebaLatLng = { lat: -25.363, lng: 131.044 };
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
        }]);
      }}

      >
      <Marker position={PruebaLatLng}> </Marker>
      {markers.map((marker)=>(
        <Marker 
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
