import "./Title.scss";
import likeIcon from "../../assets/images/Icons/likes.svg";
import viewIcon from "../../assets/images/Icons/views.svg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Title({ selectedVid, datefunction }) {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  const [displayVid, setDisplayVid] = useState(null);

  useEffect(() => {
    async function fetchDisplayVid() {
      const response = await axios.get(`${baseUrl}/videos/${selectedVid}`);
      setDisplayVid(response.data);
    }
    fetchDisplayVid();
  }, [selectedVid]);

  if (!selectedVid || !displayVid) {
    return <div>Loading...</div>;
  }

  const title = displayVid.title;
  const channel = displayVid.channel;
  const timestamp = displayVid.timestamp;
  const views = displayVid.views;
  const likes = displayVid.likes;
  const description = displayVid.description;

  return (
    <div className="content">
      <h1 className="content-title">{title}</h1>
      <div className="content-details">
        <div className="content-channel-div">
          <h3 className="content-text content-author">By {channel}</h3>
          <p className="content-text">{datefunction(timestamp)}</p>
        </div>
        <div className="content-views-div">
          <div className="content-view-div">
            <img alt="view icon" src={viewIcon} />
            <p className="content-text-img">{views}</p>
          </div>
          <div className="content-view-div">
            <img src={likeIcon} alt="like icon" />
            <p className="content-text-img">{likes}</p>
          </div>
        </div>
      </div>
      <div className="description">
        <p className="content-description">{description}</p>
      </div>
    </div>
  );
}
export default Title;
