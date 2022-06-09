import React from "react";

export default class Test extends React.Component {
  componentDidMount() {
    document.getElementById("button").click();
  }

  render() {
    return (
      <div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdCvMVu8HfVJgQqWHwG0fdNNDow1sR9_m1n8zafni2K7m6SPg/viewform">
          <button id="button" onClick={this.checkClick}>
            loading...
          </button>
        </a>
      </div>
    );
  }
}
