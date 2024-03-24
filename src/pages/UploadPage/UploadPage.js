import "./UploadPage.scss";
import uploadImg from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/images/Icons/publish.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

function UploadPage() {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  const formRef = useRef();
  const navigate = useNavigate();

  console.log(formRef);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formRef.current.title.value === "" ||
      formRef.current.description.value === ""
    ) {
      alert("All feilds must be filled!");
      return;
    }
    axios.post(`http://localhost:8080/videos`, {
      title: formRef.current.title.value,
      description: formRef.current.description.value,
    });
    alert("Upload Successful!");
    navigate("/");
  };
  return (
    <main className="upload-pg">
      <h1 className="upload-pg-title">Upload Video</h1>
      <form className="upload-pg__form" onSubmit={handleSubmit} ref={formRef}>
        <div className="upload-pg__form-thumbnail-div">
          <label>VIDEO THUMBNAIL</label>
          <img src={uploadImg} alt="runner" className="upload-pg__form__img" />
        </div>
        <div className="upload-pg__form-text-sect">
          <label htmlFor="title" className="upload-pg__form-label">
            TITLE YOUR VIDEO
          </label>
          <input
            id="title"
            type="text"
            className="upload-pg__form-text"
            placeholder="Add a title to your video"
            name="title"
          ></input>
          <label htmlFor="description" className="upload-pg__form-label">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            id="description"
            type="text"
            name="description"
            className="upload-pg__form-area"
            placeholder="Add a description to your video"
          ></textarea>
        </div>
        <section className="button-sect">
          <div className="upload-pg__btn">
            <img
              src={publishIcon}
              alt="upload icon"
              className="upload-pg__btn-icon"
            />
            <button type="submit">
              <NavLink to="/" className="link">
                PUBLISH
              </NavLink>
            </button>
          </div>
          <NavLink to="/" className="upload-pg-cancel">
            CANCEL
          </NavLink>
        </section>
      </form>
    </main>
  );
}

export default UploadPage;
