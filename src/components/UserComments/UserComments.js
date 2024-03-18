import "./UserComments.scss";

function UserComments({selectedVid, datefunction}){
    if(!selectedVid){
        return(
          <div>Loading...</div>
        )
      }
    const comments = selectedVid.comments;
    return(
        <div className="user-comments">
            {comments.map((comment) => {
                return(
                    <div key={comment.id} className="comment">
                        <div alt="avatar" className="comment-avatar"/>
                        <p className="comment-date">{datefunction(comment.timestamp)}</p>
                        <h3 className="comment-name">{comment.name}</h3>
                        <p className="comment-text">{comment.comment}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default UserComments;