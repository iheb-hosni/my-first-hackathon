import React, { Component } from "react";
import SlideShow from "./SlideShow";
import "./App.css";
class slide extends Component {
  render() {
    return (
      <div className="App">
        <SlideShow>
          <img
            src="https://www.beaugrenelle-paris.com/sites/default/files/styles/logo_detail/public/2017-12/240x180%20logo_34.png?itok=pORdtmkd"
            alt="" 
          />
          <img
            src="https://s3-eu-west-1.amazonaws.com/eu-static.italiedeux.com/Live/ResizedImages/pj5khpddpux/Gallery_Image/celio_2.png"
            alt=""
          />
          <img
            src="http://www.cbnews.fr/var/media/322/728x338/hm-321973.jpg"
            alt=""
          />
           
           <img
            src="data:image/png;base64,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"
            alt=""
          />
          
        </SlideShow>
      </div>
    );
  }
}

export default slide;
