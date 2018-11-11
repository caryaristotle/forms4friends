import React, { Component } from "react";
import questions from "./questions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    };
  }

  render() {
    const params = new URLSearchParams(document.location.search);

    const val = params.get("name");

    const show = {};

    for (
      var i = 0;
      i < this.state.index && i < questions[val].questions.length;
      i++
    ) {
      show[questions[val].questions[i].key] = true;
    }

    const form_items = questions[val].questions.map(question => {
      if (question.type === "bool") {
        return show[question.key] ? (
          <div key={question.key}>
            <p>{question.text}</p>
            <input
              type="radio"
              name={question.key}
              value={true}
              onClick={() =>
                this.setState({
                  index: this.state.index + 1
                })
              }
            />{" "}
            Yes <br />
            <input
              type="radio"
              name={question.key}
              value={false}
              onClick={() =>
                this.setState({
                  index: this.state.index + 1
                })
              }
            />{" "}
            No <br />
          </div>
        ) : (
          <div key={question.key} />
        );
      } else {
        return <h2>in progress </h2>;
      }
    });

    const verify = questions[val].submit;

    return (
      <div>
        <h1>{`This the ${questions[val].name} form!`}</h1>
        {form_items}
        <button onClick={verify}> Submit </button>
      </div>
    );
  }
}

export default Form;
