
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6AkWYmepjFpXsxTkHKjCYRHWQTC9FWQc&callback=initMap"></script>
import MainLayout from "../components/mainLayout";
import React, { useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import{
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import MStyles from "./MStyles";

const MapContainerStyle ={
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
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries,
    
    });

  if (loadError) return "error al cargar mapa";
  if (!isLoaded) return  "Cargando el mapa";


  return (
    <MainLayout pageId="main">
      <h1>Terremotos </h1>
      <GoogleMap mapContainerStyle={MapContainerStyle} 
      zoom= {3}
      center={centro}
      ></GoogleMap>

    </MainLayout>
  );
}
