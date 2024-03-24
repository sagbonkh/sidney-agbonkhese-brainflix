import AddComment from "../../components/AddComment/AddComment";
import Suggestions from "../../components/Suggestions/Suggestions";
import Title from "../../components/Title/Title";
import UserComments from "../../components/UserComments/UserComments";
import Video from "../../components/Video/Video";
import { useParams } from "react-router-dom";
import axios from "axios";

import { useEffect, useState } from "react";
import "./HomePage.scss";

function HomePage() {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  const { idFromParams } = useParams();
  let defaultID = null;
  const [videos, setVideos] = useState([]);

  if (videos.length > 0) {
    defaultID = videos[0].id;
  }

  let displayID = idFromParams ?? defaultID;

  const filteredVideo = videos.filter((video) => video.id !== displayID);

  useEffect(() => {
    axios.get(`${baseUrl}/videos`).then((response) => {
      setVideos(response.data);
    });
  }, []);

  if (!videos || !displayID) {
    return <div>...Loading</div>;
  }

  // Function to convert date to m/d/yyyy
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
    <main>
      <Video vidID={displayID} />
      <div className="main-content">
        <div className="large-screen">
          <Title selectedVid={displayID} datefunction={dateConverter} />
          <AddComment selectedVid={displayID} />
          <UserComments selectedVid={displayID} datefunction={dateConverter} />
        </div>
        <Suggestions filteredVid={filteredVideo} />
      </div>
    </main>
  );
}

export default HomePage;
