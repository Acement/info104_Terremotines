// CSS para toda la aplicación
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDejeL0xEZADo9vUN6YYIPMF9g3rGfRaYg&callback=initMap"></script>
import "../styles/style.css";
import { ChakraProvider } from "@chakra-ui/react";

// Codigo aqui estará presente en todas las páginas
const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
