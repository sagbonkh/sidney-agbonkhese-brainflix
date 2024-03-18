import { useParams } from "react-router-dom";
import "./Video.scss";

function Video({ selectedVid }) {
  if(!selectedVid){
    return(
      <div>Loading...</div>
    )
  }
  const videoUrl = selectedVid.video;
  const videoPoster = selectedVid.image;

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
