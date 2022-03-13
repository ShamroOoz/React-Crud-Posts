import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "Pages/Layout";
import Notfound from "Pages/Notfound";
import Home from "Components/Home";
import About from "Components/About";
import Contact from "Components/Contact";
import Postview from "Components/Postview";
import CreatePost from "Components/CreatePost";
import Login from "Components/Login";
import Profile from "Components/Profile";
import RequireAuth from "Components/RequireAuth";

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
        <Route path="login" element={<Login />} />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />{" "}
            </RequireAuth>
          }
        />

        {/* catch all */}
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
};

export default App;
