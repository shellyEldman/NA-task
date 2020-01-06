import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import ImageView from "./components/Image";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <div className="App">
      <div className="top-strip">
        <Navbar />
        <ImageView />
      </div>
      <Gallery />
    </div>
  );
}

export default App;
