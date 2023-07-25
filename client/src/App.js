import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./pages/NavBar";
import { AboutPage } from "./pages/AboutPage";
import { LoginPage } from "./pages/LoginPage";
import { ContactPage } from "./pages/ContactPage";
import { SongDirectory } from "./pages/SongDirectory";
import { AddSong } from "./pages/AddSong";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" exact={true} element={<HomePage />} />
          <Route path="/directorydice" exact={true} element={<HomePage />} />
          <Route path="/aboutus" exact={true} element={<AboutPage />} />
          <Route path="/contact" exact={true} element={<ContactPage />} />
          <Route path="/login" exact={true} element={<LoginPage />} />
          <Route
            path="/SongDirectory"
            exact={true}
            element={<SongDirectory />}
          />
          <Route path="/AddSong" exact={true} element={<AddSong />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
