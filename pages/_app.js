import { FilterContextProvider } from "../context/FilterContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <FilterContextProvider>
      <Component {...pageProps} />
    </FilterContextProvider>
  );
}

export default MyApp;
