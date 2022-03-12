import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProvideData } from "./Context/GlobalProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProvideData>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </ProvideData>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
