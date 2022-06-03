import Head from "next/head";
import Link from "next/link";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useState } from "react";
import {
  Button,
  Input,
  Box,
  ButtonGroup,
  FormLabel,
  Select,
  option,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const MainLayout = ({ children, pageId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    
    <div className="container">
    <Button value="rotated text" id="rotate" ref={btnRef} colorScheme="red" onClick={onOpen}>
          |||
        </Button>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Pagina principal" />
      </Head>

      
      <main>{children}</main>
      <Drawer
        size={"md"}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay 
         />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Terremotos</DrawerHeader>

          <DrawerBody>
              <Link href="/main">
              <Button
                className={pageId === "main" ? "currentPage" : ""}
                variant="outline"
              >
                Mapa
              </Button>
            </Link>
            <Link href="/tabla">
          <Button
            className={pageId === "tabla" ? "currentPage" : ""}
          >
            Tablas
          </Button>
        </Link>
                <FormLabel htmlFor='owner'>Seleccione marcadores</FormLabel>
                      <Link href="/mapMag">
                          <Button
                            className={pageId === "mapMag" ? "currentPage" : ""}
                            variant="outline"
                          >
                            Terremotos de Mayor Magnitud registrados
                          </Button>
                      </Link>
                      <Link href="/mapMor">
                          <Button
                            className={pageId === "mapMor" ? "currentPage" : ""}
                            variant="outline"
                          >
                            Terremotos mas mortales registrados
                          </Button>
                      </Link>
                      <Link href="/mapExp">
                          <Button
                            className={pageId === "mapExp" ? "currentPage" : ""}
                            variant="outline"
                          >
                            Terremotos con el mayor impacto economico registrados
                          </Button>
                      </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default MainLayout;
