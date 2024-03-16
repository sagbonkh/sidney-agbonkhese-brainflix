import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/images/Icons/search.svg";
import uploadIcon from "../../assets/images/Icons/upload.svg";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a>
          <Link to="/">
            <img src={logo} alt="brainflix logo" className="navbar-logo" />
          </Link>
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
          <div className="nav-button">
            <Link to="upload">
              <button type="submit">UPLOAD</button>
            </Link>
            <img alt="upload" src={uploadIcon} className="form-icons" />
          </div>
        </div>
        <img src={avatar} alt="avatar" className="upload-avatar" />
      </nav>
    </>
  );
}
export default Navbar;
