
import MainLayout from "../components/mainLayout";
import React, { useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function main() {
    const ref = React.useRef(null);
    const render = (status) => {
        return <h1>{status}</h1>;
      };
    
    const [map, setMap] = React.useState();
  return (
    <MainLayout pageId="main">
        <Wrapper apiKey={"AIzaSyDejeL0xEZADo9vUN6YYIPMF9g3rGfRaYg"} render={render}>

        </Wrapper>

    </MainLayout>
  );
}
