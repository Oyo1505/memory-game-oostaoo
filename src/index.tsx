import React from "react";
import ReactDOM from "react-dom/client";
import "./asset/scss/index.scss";
import App from "./App";
import { StoreProviderWrapper } from "./utils/StoreContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <StoreProviderWrapper>
      <App />
    </StoreProviderWrapper>
  </Router>
);
