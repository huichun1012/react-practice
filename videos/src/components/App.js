import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  // initial video list
  state = { videos: [], selectVideo: null };

  componentDidMount() {
    this.onTermSubmit("阿神");
  }

  onTermSubmit = async (term) => {
    console.log("term:", term);
    const response = await youtube.get("search", {
      params: {
        q: term,
      },
    });
    console.log("response:", response);
    this.setState({
      videos: response.data.items,
      // default to the first video searched
      selectVideo: response.data.items[0],
    });
  };

  selectVideo = (video) => {
    console.log("selectVideo()", video);
    this.setState({ selectVideo: video });
  };

  render() {
    //onFormSubmit=..名字可以自行定義
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.selectVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
