import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import ReactGA from "react-ga4";

ReactGA.initialize("G-04B2BH6B9D");

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found. Check index.html for #root element.");
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
