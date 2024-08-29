import React from "react";
import ReactDOM from "react-dom/client";
import "react-leaflet-fullscreen/styles.css";
import App from "./App";
import MapContextProvider from "./context/MapContext";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <MapContextProvider>
      <App />
    </MapContextProvider>
  </React.StrictMode>
);
