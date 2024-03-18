import "./UploadPage.scss";
import uploadImg from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/images/Icons/publish.svg";
import { Link } from "react-router-dom";

function UploadPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Upload uccessful!");
  };
  return (
    <main className="upload-pg">
      <h1 className="upload-pg-title">Upload Video</h1>
      <form className="upload-pg__form">
        <div className="upload-pg__form-thumbnail-div">
          <label>VIDEO THUMBNAIL</label>
          <img src={uploadImg} alt="runner" className="upload-pg__form__img" />
        </div>
        <div className="upload-pg__form-text-sect">
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
        </div>
      </form>
      <section className="button-sect">
        <div className="upload-pg__btn">
          <img
            src={publishIcon}
            alt="upload icon"
            className="upload-pg__btn-icon"
          />
          <button type="submit" onClick={handleSubmit}>
            <Link to="/" className="link">
              PUBLISH
            </Link>
          </button>
        </div>
        <Link to="/" className="upload-pg-cancel">
          CANCEL
        </Link>
      </section>
    </main>
  );
}

export default UploadPage;
