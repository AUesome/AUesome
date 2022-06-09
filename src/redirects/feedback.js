import React from "react";

export default class Test extends React.Component {
  componentDidMount() {
    document.getElementById("button").click();
  }

  render() {
    return (
      <div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfq-9XXsRSSQY4iYhx11QxAdwR4Dq-CMqw7RIP1MLypyHmK7Q/viewform">
          <button id="button" onClick={this.checkClick}>
            loading...
          </button>
        </a>
      </div>
    );
  }
}
