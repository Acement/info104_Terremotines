import Head from "next/head";
import Link from "next/link";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useState } from "react";
import marks from "../components/markers"
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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Pagina principal" />
      </Head>

      <Button value="rotated text" id="rotate" ref={btnRef} colorScheme="red" onClick={onOpen}>
          |||
        </Button>
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
                  <Button borderRadius={3} colorScheme="red"
                          onClick={()=>}
                  >Terremotos de Mayor Magnitud registrados</Button>
                  <Button borderRadius={3} colorScheme="red">Terremotos mas mortales registrados</Button>
                  <Button borderRadius={3} colorScheme="red">Terremotos con el mayor impacto economico registrados</Button>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default MainLayout;
