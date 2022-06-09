import React from "react";

export default class Test extends React.Component {
  componentDidMount() {
    document.getElementById("button").click();
  }

  render() {
    return (
      <div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd6tmec1pvRzvnoS1o6YTVTuZzCttCAz8BsZnNOGlnIy0y-fg/viewform">
          <button id="button" onClick={this.checkClick}>
            loading...
          </button>
        </a>
      </div>
    );
  }
}
