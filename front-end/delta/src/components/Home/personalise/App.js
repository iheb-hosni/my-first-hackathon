import React, { Component } from "react";
import SlideShow from "../personalise/SlideShow";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <SlideShow>
          <img
            src="https://yspimages-yoursurprisecom.netdna-ssl.com/resourcebase/files/445/890483.jpg"
            alt=""
          />
          <img
            src="https://image.spreadshirtmedia.net/content/w_650/cms/cyo/seo/kidsclothing/814_fr_desktop.png"
            alt=""
          />
          <img
            src="https://1.bp.blogspot.com/-Th3DBv6OT2c/W42yeJyQFAI/AAAAAAAARo0/0y-V6rVi-tw9FD9peCo595AAq4XaLicTQCLcBGAs/s1600/V%25C3%25AAtements%2Bpersonnalis%25C3%25A9s.jpg"
            alt=""
          />
        </SlideShow>
      </div>
    );
  }
}

export default App;
