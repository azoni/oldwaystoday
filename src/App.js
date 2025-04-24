import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About"
import Blog from "./pages/Blog";
import InnersensePost from "./pages/InnersensePost";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/innersense" element={<InnersensePost />} />
      </Routes>
    </>
  );
}

export default App;
