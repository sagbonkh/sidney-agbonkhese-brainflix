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
  const API_KEY = "36b49d3c-657d-4856-8e72-d31b935086ad";
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const { idFromParams } = useParams();
  const [summaries, setSummaries] = useState([]);
  const [displayVid, setDisplayVid] = useState(null);

  useEffect(() => {
    async function fetchVidDetails() {
      try {
        let response;
        if (idFromParams) {
          response = await axios.get(
            `${baseUrl}videos/${idFromParams}?api_key=${API_KEY}`
          );
        } else {
          // Fetch the first detailed object by default
          let summaryResponse = await axios.get(`${baseUrl}videos?api_key=${API_KEY}`);
          const defId = summaryResponse.data[0].id;
          response = await axios.get(
            `${baseUrl}videos/${defId}?api_key=${API_KEY}`);
        }
        setDisplayVid(response.data);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    }

    async function fetchSummaries() {
      try {
        const response = await axios.get(`${baseUrl}videos?api_key=${API_KEY}`);
        let arr;
        if(!idFromParams){
          const defaultId = response.data[0].id;
          arr = response.data.filter((vid) => vid.id !== defaultId);
        }
        setSummaries(arr);
      } catch (error) {
        console.error("Error fetching video summaries:", error);
      }
    }

    fetchVidDetails();
    fetchSummaries();
  }, [idFromParams]);

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
      <Video selectedVid={displayVid} />
      <div className="main-content">
        <div className="large-screen">
          <Title selectedVid={displayVid} datefunction={dateConverter} />
          <AddComment selectedVid={displayVid} />
          <UserComments selectedVid={displayVid} datefunction={dateConverter} />
        </div>
        <Suggestions
          filteredVid={summaries}
        />
      </div>
    </main>
  );
}

export default HomePage;
