import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProvideData } from "./Context/GlobalProvider";
import { ProvideAuth } from "./Context/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProvideAuth>
        <ProvideData>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </ProvideData>
      </ProvideAuth>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
