import React from "react";

export default class Test extends React.Component {
  componentDidMount() {
    document.getElementById("button").click();
  }

  render() {
    return (
      <div>
        <a href="https://airtable.com/shrIFtQYAfvNuyJc0">
          <button id="button" onClick={this.checkClick}>
            loading...
          </button>
        </a>
      </div>
    );
  }
}
