

import MainLayout from "../components/mainLayout";
import React, { useState } from "react";
import{
  GoogleMap,
  useLoadScript,
  icon,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import Mag from "../public/data/magnitud.json";

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
      {Mag.Terremotos.map((EqMag)=>(
              <Marker key={EqMag.Datos.EQ_ID} 
                      position={{lat:EqMag.geometry.coordinates[0],
                                lng:EqMag.geometry.coordinates[1]}}
                      onClick={()=>
                          {setSelectedMarker(EqMag);
                      }}
                      icon={{
                        url: "../data/magnitud.svg",
                        scaledSize:new window.google.maps.Size(25,25)
                      }}
                      />
          
          ))}
          {SelectedMarker &&<InfoWindow 
            position={{
              lat:SelectedMarker.geometry.coordinates[0],
              lng:SelectedMarker.geometry.coordinates[1]
              }}
              onCloseClick= {()=>{
                setSelectedMarker(null);
              }}
              
              >
            <div>
              <img className="photo"
              src={SelectedMarker.Datos.IMAGE}
              alt="new"
              />
              <b>{SelectedMarker.Datos.NAME}</b>
              <p>{SelectedMarker.Datos.INFO}</p>
              <a href={SelectedMarker.Datos.LINK} rel="none" target="_blank"> más información</a>
            </div>
            
          </InfoWindow>
           }
      </GoogleMap>

    </MainLayout>
  );
}
