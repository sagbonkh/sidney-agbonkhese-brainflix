import "./Suggestions.scss";

function Suggestions({ filteredVid }) {
  return (
    <div className="suggestions">
      <h2 className="suggestions-heading">NEXT VIDEOS</h2>
      {filteredVid.map((suggestion) => {
        return (
          <div className="suggestions-single">
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
          </div>
        );
      })}
    </div>
  );
}

export default Suggestions;
