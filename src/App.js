import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "Pages/Layout";
import Notfound from "Pages/Notfound";
import Home from "Components/Home";
import About from "Components/About";
import Contact from "Components/Contact";
import Postview from "Components/Postview";
import CreatePost from "./Components/CreatePost";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="posts/:id" element={<Postview />} />
        <Route path="posts/updatepost" element={<CreatePost />} />
        <Route path="posts/createpost" element={<CreatePost />} />

        {/* catch all */}
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
};

export default App;
