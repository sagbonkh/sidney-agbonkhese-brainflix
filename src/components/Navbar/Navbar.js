import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/images/Icons/search.svg";
import uploadIcon from "../../assets/images/Icons/upload.svg";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a className="navbar-link" href="./">
          <img src={logo} alt="brainflix logo" className="navbar-logo" />
        </a>
        <div className="form-div">
          <form className="upload">
            <input
              type="text"
              className="upload-text"
              placeholder="Search"
              name="upload-input"
            ></input>
            <img alt="search" src={searchIcon} className="form-icons" />
          </form>
          <div className="button">
            <button className="button-btn" type="submit">
              UPLOAD
            </button>
            <img alt="upload" src={uploadIcon} className="form-icons" />
          </div>
        </div>
        <img src={avatar} alt="avatar" className="upload-avatar" />
      </nav>
    </>
  );
}
export default Navbar;
