
import MainLayout from "../components/mainLayout";
import React, { useState } from "react";
import MapMarker from "../components/MapMarker";
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
    map= new google.maps.Map(document.getElementById('map'),{
      center: {lat: -38.397, lng: 150.644},
      zoom: 8,
      mapId:'dac7618da524a54a',

    })
  const [markers,setMarkers]= React.useState([]);
  if (loadError) return "error al cargar mapa";
  if (!isLoaded) return  "Cargando el mapa";


  return (
    <MainLayout pageId="main">
      <h1 
      >Terremotos </h1>
      

    </MainLayout>
  );
}
