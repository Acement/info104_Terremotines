import React, { useState } from "react";
import MainLayout from "../components/mainLayout";
import mapStyles from "../pages/MStyles";
import {
  withScriptjs,
  withGoogleMap,
  InfoWindow,
  GoogleMap,
  Marker,
} from "react-google-maps";

import Mag from "../public/data/magnitud.json";
import Exp from "../public/data/caros.json";
import Mor from "../public/data/victimas.json";
import { color, Icon } from "@chakra-ui/react";





const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App(){

  return (
   <MainLayout pageId="main">
  <div style={{width: "100vw", height: "100vh"}}>
    <WrappedMap 
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC6AkWYmepjFpXsxTkHKjCYRHWQTC9FWQc"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    />

  </div>
  </MainLayout>
  );

}

