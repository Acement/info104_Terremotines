/*Pagina que contiene el mapa con los markers de los terremotos con mayor impacto economico */

import MainLayout from "../components/mainLayout";
import React, { useState } from "react";
import{
  GoogleMap,
  useLoadScript,
  icon,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import Exp from "../public/data/caros.json";

import MStyles from "../public/data/MStyles";
import { Button } from "@chakra-ui/react";
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
  disableDefaultUI: false,
};

export default function main() {
    const [SelectedMarker,setSelectedMarker]= useState(null);
    const {isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_MY_API_KEY,
      libraries,
    });
  if (loadError) return "error al cargar mapa";
  if (!isLoaded) return  "Cargando el mapa";

/* return que muestra el mapa con los punteros respectivos */
  return (
    <MainLayout pageId="main">
      <GoogleMap 
      mapContainerStyle={mapContainerStyle} 
      zoom= {3}
      center={centro}
      options={options}
      >
          {Exp.Terremotos.map((EqExp)=>(
              <Marker key={EqExp.Datos.EQ_ID} 
                      position={{lat:EqExp.geometry.coordinates[0],
                                lng:EqExp.geometry.coordinates[1]}} 
                      onClick={()=>
                          {setSelectedMarker(EqExp);
                      }}
                      icon={{
                        url: "money.svg",
                        ScaledSize: new window.google.maps.Size(25,25)
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
              <Button><p>Zoom</p></Button>
            </div>
          </InfoWindow>
           }
      </GoogleMap>

    </MainLayout>
  );
}
