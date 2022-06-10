import Head from "next/head";
import Link from "next/link";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useState } from "react";
import {
  Button,
  Input,
  FormLabel,
  useDisclosure,
  Drawer,
  DrawerBody,
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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Pagina principal" />
      </Head>

      <Button value="rotated text" id="rotate" ref={btnRef} colorScheme="red" onClick={onOpen}>
          |||
        </Button>
      <main>{children}</main>
      <Drawer
        size={"lg"}
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
                Mapa Terremotos
              </Button>
            </Link>
            <Link href="/tabla">
          <Button
            className={pageId === "tabla" ? "currentPage" : ""}
          >
            Tablas comparativas
          </Button>
        </Link>
                <FormLabel htmlFor='owner'>Seleccione marcadores</FormLabel>
                      <Link href="/mapMag">
                          <Button
                            className={pageId === "mapMag" ? "currentPage" : ""}
                            variant="outline"
                          >
                            Mayor Magnitud registrados
                          </Button>
                      </Link>
                      <Link href="/mapMor">
                          <Button
                            className={pageId === "mapMor" ? "currentPage" : ""}
                            variant="outline"
                          >
                            Mas mortales registrados
                          </Button>
                      </Link>
                      <Link href="/mapExp">
                          <Button
                            className={pageId === "mapExp" ? "currentPage" : ""}
                            variant="outline"
                          >
                            Mayor impacto economico registrados
                          </Button>
                      </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default MainLayout;
