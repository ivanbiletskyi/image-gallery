import React, { Component } from "react";
import "./styles/App.css";
import { Provider } from "react-redux";
import Gallery from "./Gallery";
import store from "../redux/store";
// import Image from "./Image";
// import inModal from "./inModal";
// const ImageInModal = inModal(Image);

class App extends Component {
  state = { isModalOpened: false };
  handleClose = () => {
    this.setState({ isModalOpened: false });
  };
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Gallery />
        </Provider>
      </div>
    );
  }
}

export default App;
