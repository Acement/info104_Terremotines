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

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
}from "@reach/combobox";
import "@reach/combobox/styles.css";

import Exp from "../public/data/caros.json";
import Mag from "../public/data/magnitud.json";
import Mor from "../public/data/victimas.json";

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

    const mapRef= React.useRef();
    const onMapLoad = React.useCallback((map)=>{
        mapRef.current = map;
    }, []);

    const ZoomTo = React.useCallback(({lat,lng})=>{
        mapRef.current.ZoomTo({lat,lng});
        mapRef.current.setZoom(20);
    })


    if (loadError) return "error al cargar mapa";
    if (!isLoaded) return  "Cargando el mapa";

/* return que muestra el mapa con los punteros respectivos */
  return (
    <MainLayout pageId="main">

      <Search ZoomTo={ZoomTo}/>
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
                      onClick={()=>
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
              <b>{SelectedMarker.Datos.NAME}</b>
              <p>{SelectedMarker.Datos.INFO}</p>
              <button
              >Zoom</button>
            </div>
          </InfoWindow>
           }
      </GoogleMap>

    </MainLayout>
  );

}
/*
function Search(ZoomTo){
    const{ready,valor,suggestions: {status,data}, setValue, clearSuggestions}= usePlacesAutocomplete({
        requestOptions:{
            location:{lat:()=>SelectedMarker.geometry.coordinates[0], lng: ()=>SelectedMarker.geometry.coordinates[1]},
            radius: 200 * 1000,


        },
    });

    return ( 
     <div className="search"> 
        <Combobox 
        onSelect={async (direccion)=> {
            setValue(direccion,false);
            clearSuggestions();

            try{
                const results = await getGeocode({direccion});
                const{lat,lng} = await getLatLng(results[0]);

            }catch (error){
                console.log("error!");
            }
        }}

        >
        <ComboboxInput 
            valor={valor} 
            onChange={(event)=> {
                setValue(event.target.valor);
            }}
            disabled={!ready}
            placeholder= "Buscar terremoto"
        />
            <ComboboxPopover>
                <ComboboxList>
                    {status == "OK" && data.map(({id,description})=>(
                        <ComboboxInput key={id} value={description}/>
                    ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    </div>  
    );
}
*/