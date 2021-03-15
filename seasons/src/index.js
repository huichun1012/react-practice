import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  constructor(props) {
    super(props);
    // initialize state js object, assigning the default value of the data we will use
    this.state = { lat: null, errMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  // This method automatically called right after render() called
  componentDidUpdate() {
    console.log("This message shows up everytime the component got updated!");
  }

  toRenderContent() {
    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else if (this.state.errMessage && !this.state.lat) {
      return <div>Error Occur:{this.state.errMessage}</div>;
    } else {
      return <Loader message="Please accept location request" />;
    }
  }

  //React require to define render() function
  render() {
    return <div className="border red">{this.toRenderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
