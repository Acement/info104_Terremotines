import Head from "next/head";
import Link from "next/link";
import {
  withScriptjs,
  withGoogleMap,
  InfoWindow,
  GoogleMap,
  Marker,
} from "react-google-maps";
import React, { useState } from "react";
import {
  Button,
  FormLabel,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Mag from "../public/data/magnitud.json";
const MainLayout = ({ children, pageId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Pagina principal" />
      </Head>

      <Button value="rotated text" id="rotate" ref={btnRef} colorScheme="red" onClick={onOpen}>
          |||
        </Button>
      <main>{children}</main>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
              <Link href="/main">
              <a
                className={pageId === "main" ? "currentPage" : ""}
              >
                Mapa
              </a>
            </Link>
            <Link href="/tabla">
          <a
            className={pageId === "tabla" ? "currentPage" : ""}
          >
            Tablas
          </a>
        </Link>
                <FormLabel htmlFor='owner'>Seleccione marcadores</FormLabel>
                  <Button colorScheme="red" variant="outline" mr={4} value='markerD'
                          onClick={()=>
                            }
                  >Más destructivos
                  </Button>
                  <Button colorScheme="red" variant="outline" mr={4}  value='markerI'
                          onClick={
                            onClose
                            }
                  >Mayor impacto</Button>
                  <Button colorScheme="red" variant="outline" mr={4}  value='markerM'
                          onClick={
                            onClose
                          }
                  >Mayor Magnitud </Button>

          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default MainLayout;


function Map(){
  const [SelectedMarker,setSelectedMarker]= useState(null);
  return (

        <GoogleMap 
          defaultZoom={3} 
          defaultCenter={{lat: 0,lng:0}} 
          defaultOptions= {{styles: mapStyles }}
        >
          {Mag.Terremotos.map((EqMag)=>(
              <Marker key={EqMag.Datos.EQ_ID} 
                      position={{lat:EqMag.geometry.coordinates[0],
                                lng:EqMag.geometry.coordinates[1]}}
                      onClick={()=>
                          {setSelectedMarker(EqMag);
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

                        />

          ))}
          {Exp.Terremotos.map((EqExp)=>(
              <Marker key={EqExp.Datos.EQ_ID} 
                      position={{lat:EqExp.geometry.coordinates[0],
                                lng:EqExp.geometry.coordinates[1]}} 
                      onClick={()=>
                          {setSelectedMarker(EqExp);
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
            </div>
          </InfoWindow>
           }
        </GoogleMap>
  );

}
