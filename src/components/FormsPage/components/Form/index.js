import React, { Component } from "react";
import questions from "./questions";

class Form extends Component {
  render() {
    const params = new URLSearchParams(document.location.search);

    const val = params.get("name");
    console.log(val);
    console.log(questions[val]);

    const form_items = questions[val].questions.map(question => {
      if (question.type === "bool") {
        return (
          <div>
            <p>{question.text}</p>
            <input type="radio" name={question.key} value={true} /> Yes <br />
            <input type="radio" name={question.key} value={false} /> No <br />
          </div>
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
