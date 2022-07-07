/*Pagina que contiene el mapa con los markers de los terremotos con mayor impacto economico */

import MainLayout from "../components/mainLayout";
import React, { useState } from "react";
import{
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import Exp from "../public/data/caros.json";
import Mag from "../public/data/magnitud.json";
import Mor from "../public/data/victimas.json";

import MStyles from "../public/data/MStyles";
import { Button, position } from "@chakra-ui/react";

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
  streetViewControl: false,
};

export default function main() {
    const [SelMarkers,setSelMarkers]= useState(null);
    const {isLoaded, loadError } = useLoadScript({googleMapsApiKey: process.env.NEXT_PUBLIC_MY_API_KEY, libraries,});
    if (loadError) return "error al cargar mapa";
    if (!isLoaded) return  "Cargando el mapa";
    
/* return que muestra el mapa con los punteros respectivos */
  return (
    <MainLayout pageId="main">

      <GoogleMap 
      id="map"
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
                          {setSelMarkers(EqExp);
                      }}
                      icon={{
                        url: "../data/moneda.svg",
                        scaledSize:new window.google.maps.Size(25,25)
                      }}
                        />

          ))}
          {Mag.Terremotos.map((EqMag)=>(
              <Marker key={EqMag.Datos.EQ_ID} 
                      position={{lat:EqMag.geometry.coordinates[0],
                                lng:EqMag.geometry.coordinates[1]}}
                      onClick={()=>
                          {setSelMarkers(EqMag);
                          
                      }}
                      icon={{
                        url: "../data/magnitud.svg",
                        scaledSize:new window.google.maps.Size(25,25)
                      }}
                      />
          
          ))}
          {Mor.Terremotos.map((EqMor)=>(
              <Marker key={EqMor.Datos.EQ_ID} 
                      position={{lat:EqMor.geometry.coordinates[0],
                                lng:EqMor.geometry.coordinates[1]}} 
                      onClick={(e)=>
                          {setSelMarkers(EqMor);
                      }}
                      icon={{
                        url: "../data/mortalidad.svg",
                      }}
                        />

          ))}          
          {SelMarkers &&<InfoWindow 
            position={{
              lat:SelMarkers.geometry.coordinates[0],
              lng:SelMarkers.geometry.coordinates[1]}}
            onCloseClick= {()=>{setSelMarkers(null);}}
              >
            <div className="grid">
              <img className="photo"
                src={SelMarkers.Datos.IMAGE}
                alt="new"
              />
              <b>{SelMarkers.Datos.NAME}</b>
              <p>{SelMarkers.Datos.INFO}</p>
              <Button colorScheme='blue' variant='link' size='sm' > 
                  <a href={SelMarkers.Datos.LINK} rel="none" target="_blank"> 
                        <b>más información</b>
                  </a> 
              </Button> 
            </div>
          </InfoWindow>
           }
      </GoogleMap>
    </MainLayout>
  );

}

