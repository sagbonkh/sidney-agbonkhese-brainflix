import AddComment from "../../components/AddComment/AddComment";
import Suggestions from "../../components/Suggestions/Suggestions";
import Title from "../../components/Title/Title";
import UserComments from "../../components/UserComments/UserComments";
import Video from "../../components/Video/Video";
import "./HomePage.scss";

function HomePage({
  selectedVid,
  datefunction,
  filteredVid,
  handleVideoSelector,
}) {
  return (
    <main>
      <Video selectedVid={selectedVid} />
      <div className="main-content">
        <div className="large-screen">
            <Title selectedVid={selectedVid} datefunction={datefunction} />
            <AddComment selectedVid={selectedVid} />
            <UserComments selectedVid={selectedVid} datefunction={datefunction} />
        </div>

        <Suggestions
          filteredVid={filteredVid}
          selectVideo={handleVideoSelector}
        />
      </div>
    </main>
  );
}

export default HomePage;
