import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "Pages/Layout";
import Home from "Components/Home";
import About from "Components/About";
import Contact from "Components/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
