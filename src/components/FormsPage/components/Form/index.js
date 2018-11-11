import React, { Component } from "react";
import { Div, Button, formRadio } from "./styles";
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
          <Div flexDirection="column">
            <p>{question.text}</p>
            <Div flexDirection="row">
            <input type="radio" class="formRadio" name={question.key} value={true} /> Yes <br />
            <input type="radio" class="formRadio" name={question.key} value={false} /> No <br />
            </Div>
          </Div>
        );
      } else if (question.type === "text") {
        return <h2>in progress </h2>;
      }
    });

    const verify = questions[val].submit;

    return (
      <Div flexDirection="column" >
        <h1>{`This the ${questions[val].name} form!`}</h1>
        {form_items}
        <Button onClick={verify}> Submit </Button>
      </Div>
    );
  }
}

export default Form;
