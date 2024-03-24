import { useParams } from "react-router-dom";
import "./Video.scss";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Video({ vidID }) {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  const [displayVid, setDisplayVid] = useState(null);

  useEffect(() => {
    async function fetchDisplayVid() {
      const response = await axios.get(`${baseUrl}/videos/${vidID}`);
      setDisplayVid(response.data);
    }
    fetchDisplayVid();
  }, [vidID]);

  if (!vidID || !displayVid) {
    return <div>Loading...</div>;
  }

  const videoPoster = displayVid.image;
  const videoUrl = displayVid.video;

  return (
    <div className="video-container">
      <video className="video" controls poster={videoPoster}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
