import "./AddComment.scss";
import commentIcon from "../../assets/images/Icons/add_comment.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function AddComment({ selectedVid }) {
  const comments = selectedVid.comments.length;
  return (
    <div className="addsect">
      <h3 className="addsect-comment">{comments} Comments</h3>
      <form className="form">
        <img src={avatar} alt="avatar" className="form-avatar" />
        <div className="form-text-div">
          <label htmlFor="form-text">JOIN THE CONVERSATION</label>
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
