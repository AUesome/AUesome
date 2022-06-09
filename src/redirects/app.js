import React, { Component } from "react";
import PDF from "pdfs/app.pdf";

class Download extends Component {
  render() {
    return (
      <div className="App">
        <a href={PDF} target="_blank">
          Download Pdf
        </a>
      </div>
    );
  }
}

export default Download;
