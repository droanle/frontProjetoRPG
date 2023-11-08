import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import { PrimeReactProvider } from "primereact/api";

// Theme
import "./theme.css";

//Core
import "primereact/resources/primereact.min.css";

//Icons
import "primeicons/primeicons.css";
import "font-awesome/css/font-awesome.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <Routes />
    </PrimeReactProvider>
  </React.StrictMode>
);

reportWebVitals();
