import React, { Component } from "react";
import SlideShow1 from "../essayage/SlideShow";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <SlideShow1>
          <img
            src="https://img.purch.com/w/600/aHR0cDovL21lZGlhLmJlc3RvZm1pY3JvLmNvbS8yLzEvNjE4MjY1L29yaWdpbmFsL2Npc2NvLXNob3BwaW5nLmpwZw=="
            alt=""
          />
          <img
            src="https://www.ftconseil.com/wp-content/uploads/2016/09/Capture-d%E2%80%99%C3%A9cran-2016-09-20-%C3%A0-19.38.41.png"
            alt=""
          />
          <img
            src="http://www.womenology.fr/wp-content/uploads/2011/04/Im-essayage-carrie.jpg"
            alt=""
          />
        </SlideShow1>
      </div>
    );
  }
}

export default App;
