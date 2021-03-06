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
  StreetViewPanoramaOptions: false
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
                          {setSelectedMarker(EqExp);
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
                          {setSelectedMarker(EqMag);
                          
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
                          {setSelectedMarker(EqMor);
                      }}
                      icon={{
                        url: "../data/mortalidad.svg",
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
             <Button colorScheme='blue' variant='link' size='sm' > <a href={SelectedMarker.Datos.LINK} rel="none" target="_blank"> <b>m??s informaci??n</b></a> </Button> 
            </div>
          </InfoWindow>
           }
      </GoogleMap>

    </MainLayout>
  );

}

