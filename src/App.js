import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="upload" element={<UploadPage />} />
        <Route path="/video/:idFromParams" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
