import Head from "next/head";
import Link from "next/link";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useState } from "react";
import {
  Button,
  Input,
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
      <he1 className="menu">
        <Button ref={btnRef} colorScheme="red" onClick={onOpen}>
          Menu
        </Button>
      </he1>
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
