import "./Title.scss";
import likeIcon from "../../assets/images/Icons/likes.svg";
import viewIcon from "../../assets/images/Icons/views.svg";

function Title({ selectedVid, datefunction }) {
  const title = selectedVid.title;
  const channel = selectedVid.channel;
  const timestamp = selectedVid.timestamp;
  const views = selectedVid.views;
  const likes = selectedVid.likes;
  const description = selectedVid.description;

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
            <img alt ="view icon" src={viewIcon} />
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
