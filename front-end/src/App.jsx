import React from "react";
import Header from "./components/Header.jsx";
import Home from "./Pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artists from "./Pages/Artists.jsx";
import Artist from "./Pages/Artist.jsx";
import Songs from "./Pages/Songs.jsx";
import Song from "./Pages/Song.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/song/:id" element={<Song />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
