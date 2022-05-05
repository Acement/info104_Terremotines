import Head from "next/head";
import Link from "next/link";
import ViewCount from "../components/viewCount";
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

const Layout = ({ children, pageId }) => {
  const [nViews, setViews] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  function incrementViews() {
    //console.log(nViews);
    setViews(nViews + 1);
  }
  function resetViews() {
    setViews(0);
  }

  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ejemplo de sitio web con menú" />
      </Head>
      <header className="menu">
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open
        </Button>
        <Link href="/page1">
          <a
            className={pageId === "page1" ? "currentPage" : ""}
            onClick={incrementViews}
          >
            Página 1
          </a>
        </Link>

        <Link href="/page2">
          <a
            className={pageId === "page2" ? "currentPage" : ""}
            onClick={incrementViews}
          >
            Página 2
          </a>
        </Link>

        <Link href="/page3">
          <a
            className={pageId === "page3" ? "currentPage" : ""}
            onClick={incrementViews}
          >
            Página 3
          </a>
        </Link>

        <Link href="/pageList">
          <a
            className={pageId === "page4" ? "currentPage" : ""}
            onClick={incrementViews}
          >
            To-Do
          </a>
        </Link>
        <ViewCount count={nViews} reset={resetViews} />
      </header>
      <main>{children}</main>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default Layout;
