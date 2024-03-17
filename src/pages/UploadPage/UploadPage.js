import "./UploadPage.scss";
import uploadImg from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/images/Icons/publish.svg";
import { Link } from "react-router-dom";

function UploadPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <main className="upload-pg">
      <h1 className="upload-pg-title">Upload Video</h1>
      <form className="upload-pg__form">
        <label>VIDEO THUMBNAIL</label>
        <img src={uploadImg} alt="runner" className="upload-pg__form-img" />
        <label htmlFor="upload-pg-input" className="upload-pg__form-label">
          TITLE YOUR VIDEO
        </label>
        <input
          type="text"
          className="upload-pg__form-text"
          placeholder="Add a title to your video"
          name="upload-pg-input"
        ></input>
        <label htmlFor="upload-pg-area" className="upload-pg__form-label">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea
          type="text"
          name="upload-pg-area"
          className="upload-pg__form-area"
          placeholder="Add a description to your video"
        ></textarea>
      </form>
      <div className="upload-pg__btn">
        <img
          src={publishIcon}
          alt="upload icon"
          className="upload-pg__btn-icon"
        />
        <button type="submit" onSubmit={handleSubmit}>
          PUBLISH
        </button>
      </div>
      <Link to="/" className="upload-pg-cancel">
        CANCEL
      </Link>
    </main>
  );
}

export default UploadPage;
