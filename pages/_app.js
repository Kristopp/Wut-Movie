import React from "react";
import "../styles/globals.css";
import { StateProvider } from "../state/stateProvider";
import reducer, { initalState } from "../reducer/reducer";



function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initalState={initalState} reducer={reducer}>
      <Component {...pageProps} />
    </StateProvider>
  );
}



export default MyApp;
