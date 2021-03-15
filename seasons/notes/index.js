import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

// this is a funcional component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Latitude:</div>;
// };

// this is a class-based component
// back up
// class App extends React.Component {
class BackupApp extends React.Component {
  constructor(props) {
    super(props);
    // initialize state js object, assigning the default value of the data we will use
    this.state = { lat: null, errMessage: "" };

    //get the location when the app instance create
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);

        // pass in a state object with latitude value
        // 當setState被呼叫時，會幾乎馬上rerender頁面
        this.setState({ lat: position.coords.latitude });

        // 必須使用setState方法才可以, 不可使用:
        // this.state.lat= ...
      },
      (err) => {
        console.log(err);
        this.setState({ errMessage: err.message });
      }
    );
  }

  componentDidMount() {
    console.log("This message shows up when component rendered first time!");
  }

  // This method automatically called right after render() called
  componentDidUpdate() {
    console.log("This message shows up everytime the component got updated!");
  }

  //React require to define render() function
  render = () => {
    if (!this.state.errMessage && this.state.lat) {
      return <div>Latitude:{this.state.lat}</div>;
    } else if (this.state.errMessage && !this.state.lat) {
      return <div>Error Occur:{this.state.errMessage}</div>;
    } else {
      return <div>Loading...</div>;
    }
  };
}

ReactDOM.render(<App />, document.querySelector("#root"));
