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
        <Box>
                <FormLabel htmlFor='owner'>Seleccione marcadores</FormLabel>
                <Select id='owner' defaultValue='markerD'>
                  <option value='markerD'

                  >Más destructivos</option>
                  <option value='markerI'>Mayor impacto</option>
                  <option value='markerM'>Mayor Magnitud </option>
                </Select>
        </Box>

          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Salir
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default MainLayout;
