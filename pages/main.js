/* Codigo de la pagina principal que contiene el mapa */

import MainLayout from "../components/mainLayout";
import React, { useState } from "react";
import{
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";

import MStyles from "../public/data/MStyles";
const mapContainerStyle ={
  width: "98vw",
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

/* Funcion que crea el mapa */
export default function main() {
    const {isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_MY_API_KEY,
      libraries,
    });
  if (loadError) return "error al cargar mapa";
  if (!isLoaded) return  "Cargando el mapa";

/* Return que muestra el mapa con sus caracteristicas */
  return (
    <MainLayout pageId="main">

      <GoogleMap 
      mapContainerStyle={mapContainerStyle} 
      zoom= {3}
      center={centro}
      options={options}
      >
      </GoogleMap>

    </MainLayout>
  );
}
