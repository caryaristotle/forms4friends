import React, { Component } from "react";

class Form extends Component {
  render() {
    const params = new URLSearchParams(document.location.search);

    return (
      <div>
        <h1>{`This the ${params.get("name")} form!`}</h1>
      </div>
    );
  }
}

export default Form;
