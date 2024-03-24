import "./AddComment.scss";
import commentIcon from "../../assets/images/Icons/add_comment.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import fetchDetails from "../../hooks/fetchDetails";

function AddComment({ selectedVid }) {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;

  const displayVid = fetchDetails(baseUrl, selectedVid);

  if (!selectedVid || !displayVid) {
    return <div>Loading...</div>;
  }

  const comments = displayVid.comments.length;
  return (
    <div className="addsect">
      <h3 className="addsect-comment">{comments} Comments</h3>
      <form className="form">
        <img src={avatar} alt="avatar" className="form-avatar" />
        <div className="form-text-div">
          <h2 className="form-subheading">JOIN THE CONVERSATION</h2>
          <textarea
            placeholder="Add a new comment"
            className="form-text"
            name="form-text"
          ></textarea>
        </div>
        <div className="button">
          <button type="submit">COMMENT</button>
          <img alt="comment" src={commentIcon} className="button-icon" />
        </div>
      </form>
    </div>
  );
}

export default AddComment;
