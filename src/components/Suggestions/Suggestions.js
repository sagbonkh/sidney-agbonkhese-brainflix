import { Link } from "react-router-dom";
import "./Suggestions.scss";

function Suggestions({ filteredVid }) {
  if(!filteredVid){
    return(
      <div>Loading...</div>
    )
  }
  return (
    <div className="suggestions">
      <h2 className="suggestions-heading">NEXT VIDEOS</h2>
      {filteredVid.map((suggestion) => {
        return (
          <Link key={suggestion.id} to={`/video/${suggestion.id}`} className="suggestions-single">
            <div>
              <img
                className="suggestions-img"
                alt="coverphoto"
                src={suggestion.image}
              />
            </div>
            <div className="suggestions-text">
              <h3 className="suggestions-title">{suggestion.title}</h3>
              <p className="suggestions-channel">{suggestion.channel}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Suggestions;
