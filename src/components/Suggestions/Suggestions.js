import "./Suggestions.scss";

function Suggestions({ filteredVid, selectVideo }) {
  return (
    <div className="suggestions">
      <h2 className="suggestions-heading">NEXT VIDEOS</h2>
      {filteredVid.map((suggestion) => {
        return (
          <a className="suggestions-single" onClick={() => selectVideo(suggestion.id)} key={suggestion.id}>
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
          </a>
        );
      })}
    </div>
  );
}

export default Suggestions;
