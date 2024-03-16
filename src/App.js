import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Video from "./components/Video/Video";
import vidsData from "./data/videos.json";
import vidDetails from "./data/video-details.json";
import { useState } from "react";
import Title from "./components/Title/Title";
import AddComment from "./components/AddComment/AddComment";
import UserComments from "./components/UserComments/UserComments";
import Suggestions from "./components/Suggestions/Suggestions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import VideoUpload from "./pages/VideoUpload/VideoUpload";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  const [videos] = useState(vidsData);
  const [selectedVid, setSelectedVid] = useState(vidDetails[0]);

  const handleVideoSelector = (vidId) => {
    const foundVid = vidDetails.find((vid) => vidId === vid.id);
    setSelectedVid(foundVid);
  };

  const filteredVid = videos.filter((vid) => vid.id !== selectedVid.id);

  const dateConverter = (timestamp) => {
    const date = new Date();
    const commentTime = new Date(timestamp);
    const timeDifference = date.getTime() - commentTime.getTime();

    const secs = Math.floor(timeDifference / 1000);
    if (secs < 60) {
      return `${secs}s ago`;
    } else if (secs < 3600) {
      const mins = Math.floor(secs / 60);
      return `${mins} mins ago`;
    } else if (secs < 86400) {
      const hrs = Math.floor(secs / 3600);
      return `${hrs} hours ago`;
    } else {
      const month = commentTime.getMonth() + 1;
      const day = commentTime.getDate();
      const year = commentTime.getFullYear();
      return `${month}/${day}/${year}`;
    }
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              selectedVid={selectedVid}
              datefunction={dateConverter}
              filteredVid={filteredVid}
              selectVideo={handleVideoSelector}
            />
          }
        />
        <Route path="upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
